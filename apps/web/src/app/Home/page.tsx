import type { SearchForm } from "../../components/modals/searchModal"
import ClientComp from "../../components/clientComp"
import { checkSession } from "../../api/server/auth"
import { getProperties } from "../../api/server/property/getProperty"
import { getFavourites } from "../../api/server/property/getwishlist"
import { HomeClient } from "./HomeClient"

export const dynamic = 'force-dynamic'

interface HomeProps{
  searchParams:SearchForm
}


export default async function Home({searchParams}:HomeProps){
    const properties=await getProperties(1,10,searchParams)
    const {session,userData}=await checkSession()


  if(!session||userData.is_Admin)return(
    <ClientComp>
    <HomeClient properties={properties}  userData={userData}/>
    </ClientComp>
    )

  
    const wishList=await getFavourites(1,20);
   
    return(
      <ClientComp>
        <HomeClient properties={properties} wishList={wishList} userData={userData}/>
      </ClientComp>
    )
    
}
