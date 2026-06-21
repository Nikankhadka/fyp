import { api } from "@/api/api";
import { IReview } from "../../../interface/response";
import { getAccessToken } from "../auth";

export async function getReviews(propertyId:string,page:number,limit:number):Promise<IReview[]>{
    try{
        const res = await fetch(
            `${api}/property/v1/review/${propertyId}/?page=${page}&limit=${limit}`,
            {
              method: 'GET',
              credentials: 'include',
              headers: { cookie: getAccessToken()},
              next: { revalidate: 60, tags: [`reviews-${propertyId}`] },
            }
          ).then(res=>res.json())
    
          if(!res.success) throw new Error(`${res.error}`)
        
        return res.reviews;
  
        
    }catch(e){
       throw e;
  }}