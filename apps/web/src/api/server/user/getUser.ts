'server-only'
import { cookies } from 'next/headers';
import { FetchedMe, FetchedUserData } from "../../../interface/response";
import Api from "../../client/axios"
import { getAccessToken } from '../auth';
import { api } from '@/api/api';


//get user
export async function getUser(userId:string):Promise<Partial<FetchedMe>>{
    try{
        const userData = await fetch(
            `${api}/user/v1/getUser/${userId}`,
            {
              method: 'GET',
              credentials: 'include',
              next: { revalidate: 60, tags: [`user-${userId}`] },
            }
          ).then(res=>res.json())
    
        if(!userData.success) throw new Error("failed to fetch user information")

        return userData.userData;

        
    }catch(e){
       throw e;
    }
}




export async function getMe():Promise<FetchedMe>{
  try{
    
      
      const userData = await fetch(
          `${api}/user/v1/getMe`,
          {
            method: 'GET',
            credentials: 'include',
            headers: { cookie: getAccessToken()},
            next: { revalidate: 10, tags: ['me'] },
          }
        ).then(res=>res.json())

      if(!userData.success) throw new Error("failed to fetch user information")

      return userData.userData;

      
  }catch(e){
     throw e;
  }
}


// for admin exclusive get all users
export async function getAllUsers(page:number,limit:number,):Promise<Partial<FetchedMe>[]>{
  try{
    
      
      const userData = await fetch(
          `${api}/admin/v1/allUsers/?page=${page}&limit=${limit}`,
          {
            method: 'GET',
            credentials: 'include',
            headers: { cookie: getAccessToken()},
            next: { revalidate: 10, tags: ['all-users'] },
          }
        ).then(res=>res.json())
  
      if(!userData.success) throw new Error("failed to fetch users information")

      return userData.users;

      
  }catch(e){
     throw e;
  }
}




//fetch information of user whose kyc needs to be verified basic profile view by admin
export async function getUserKyc(userId:string):Promise<FetchedMe>{
  try{
    
      
      const userData = await fetch(
          `${api}/admin/v1/getUser/${userId}`,
          {
            method: 'GET',
            credentials: 'include',
            headers: { cookie: getAccessToken()},
            next: { revalidate: 10, tags: [`user-${userId}`] },
          }
        ).then(res=>res.json())

      if(!userData.success) throw new Error("failed to fetch user information")

      return userData.userData;

      
  }catch(e){
     throw e;
  }
}



export interface kycRequests{
  userId:string
  userName:string,
  _id:string,
  profileImg:{
    imgUrl:string,
    imgId:string
  }
  about:string
}

//for admin get kyc requests
export async function getKycs(page:number,limit:number):Promise<kycRequests[]>{
  try{
    
      
      const kycRequests = await fetch(
          `${api}/admin/v1/kycRequests/?page=${page}&limit=${limit}`,
          {
            method: 'GET',
            credentials: 'include',
            headers: { cookie: getAccessToken()},
            next: { revalidate: 10, tags: ['kyc-requests'] },
          }
        ).then(res=>res.json())
  
      if(!kycRequests.success) throw new Error("failed to fetch user information")

      return kycRequests.kycRequests;

      
  }catch(e){
     throw e;
  }
}

