'use client'

import Link from "next/link"
import { BadgeCheck, XCircle } from "lucide-react"
import { kycRequests } from "../../api/server/user/getUser"
import useModal from "../../store/useModal"
import useConfirm from "../../store/useConfirm"
import { verifyKyc } from "../../api/client/admin"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import useReject from "../../store/useReject"
import Image from "next/image"
import { normalizeImageSrc } from "../common/normalizeImageSrc"
import { Button } from "../ui/primitives"

interface UserProps{
  userData:kycRequests
}

function capitalize(str?: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export default function UserCard({userData}:UserProps){
  const modal=useModal();
  const confirm=useConfirm()
  //store 
  const reject=useReject()
  const router=useRouter()
  const{userName,userId,_id,profileImg,about}=userData
  const profileImageSrc = normalizeImageSrc(profileImg?.imgUrl)


    return(
    <main className="mx-auto w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-4 duration-300 hover:shadow-xl sm:w-[80%]">
     
      <Link href={`/Home/user/${_id}`} target="_blank" rel="noopener noreferrer">
      <div className="mt-2 mb-4 w-fit">
        {profileImageSrc ? (
          <Image
            src={profileImageSrc}
            alt={`${userName}'s profile photo`}
            height={112}
            width={112}
            className="rounded-full"
          />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-surface-container text-center text-xs text-onSurface-variant">
            No image available
          </div>
        )}
      </div>
      </Link>

      <div className="mt-3 text-sm font-semibold text-onSurface">{capitalize(userName)}</div>
      <p className="mt-1 text-sm font-semibold text-onSurface-variant">{about}</p>

      

        <div className="mt-4 flex items-center gap-x-2">
          <Button
            type="button"
            onClick={(e)=>{
              e.preventDefault();
              console.log('verify')

              confirm.onContent({
                header:'Are You Sure To Verify?',
                actionBtn:"Verify",
                onAction:async()=>{
                  const res=await verifyKyc(_id,{isVerified:true});
                  if(res){
                    toast.success(`User ${userId} verified successfully`);
                     modal.onClose();
                    return router.refresh();
                  }

                  toast.error("Failed to verify User");
                  return modal.onClose()
                }
              })

              modal.onOpen('confirm')

            }}
          >
            <BadgeCheck className="mr-2 h-4 w-4" />
            Verify
          </Button>
          <Button
            type="button"
            tone="danger"
            onClick={(e)=>{
              e.preventDefault();
              console.log('reject')

              //set btn name 
              reject.setbtn('Reject')

              reject.onContent({
                onReject:async(message:string)=>{
                  try{
                    const res=await verifyKyc(_id,{isVerified:false,message});
                    if(res){
                      toast.success("User kyc Rejected");
                      modal.onClose();
                      return router.refresh();
                    }
                    toast.error("Kyc rejection Failed!");
                    return modal.onClose();
                  }catch(e){
                    console.log(e)
                   return  toast.error("Kyc rejection Failed!");
                  }
                
                }
              })




              modal.onOpen("reject")
            }}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>
         </div>
    </main>
    )
}
