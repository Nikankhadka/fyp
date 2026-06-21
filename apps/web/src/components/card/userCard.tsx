'use client'

import Link from "next/link"
import { memo } from "react"
import { BadgeCheck, XCircle } from "lucide-react"
import type { kycRequests } from "../../api/server/user/getUser"
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

function UserCardComponent({userData}:UserProps){
  // Select only stable action setters so the card never re-renders on
  // unrelated store state changes.
  const onOpenModal = useModal((s) => s.onOpen)
  const onCloseModal = useModal((s) => s.onClose)
  const onConfirmContent = useConfirm((s) => s.onContent)
  const setRejectBtn = useReject((s) => s.setbtn)
  const onRejectContent = useReject((s) => s.onContent)
  const router = useRouter()
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

              onConfirmContent({
                header:'Are You Sure To Verify?',
                actionBtn:"Verify",
                onAction:async()=>{
                  const res=await verifyKyc(_id,{isVerified:true});
                  if(res){
                    toast.success(`User ${userId} verified successfully`);
                     onCloseModal();
                    return router.refresh();
                  }

                  toast.error("Failed to verify User");
                  return onCloseModal()
                }
              })

              onOpenModal('confirm')

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

              //set btn name
              setRejectBtn('Reject')

              onRejectContent({
                onReject:async(message:string)=>{
                  try{
                    const res=await verifyKyc(_id,{isVerified:false,message});
                    if(res){
                      toast.success("User kyc Rejected");
                      onCloseModal();
                      return router.refresh();
                    }
                    toast.error("Kyc rejection Failed!");
                    return onCloseModal();
                  }catch{
                   return  toast.error("Kyc rejection Failed!");
                  }

                }
              })




              onOpenModal("reject")
            }}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>
         </div>
    </main>
    )
}

const UserCard = memo(UserCardComponent)

export default UserCard
