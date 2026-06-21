import Api from "./axios"
import {
  revalidateKycAdmin,
  revalidatePropertyVerified,
} from "../server/revalidate"


export async  function verifyKyc(id:string,body:{isVerified:boolean,message?:string}){
    try{
        const res=await Api.patch(`/admin/v1/kycRequests/${id}`,body,{withCredentials:true})
        if(!res.data.success) return false;
        await revalidateKycAdmin(id)
        return true
    }catch{
        return false
    }
}

export async  function verifyProperty(id:string,body:{isVerified:boolean,message?:string}){
    try{
        const res=await Api.patch(`/admin/v1/propertyRequests/${id}`,body,{withCredentials:true})
        if(!res.data.success) return false;
        await revalidatePropertyVerified(id)
        return true
    }catch{
        return false
    }
}