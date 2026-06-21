import Profile from '../../../../components/user/profile'
import { getMe, getUser, getUserKyc } from '../../../../api/server/user/getUser'
import { checkSession } from '../../../../api/server/auth'
import ClientComp from '../../../../components/clientComp'
import { getMyProperties } from '../../../../api/server/property/getProperty'
type Params = {
  params: {
    userId: string
  }
}

export default async function UserProfile({ params: { userId } }: Params) {
  
  // getMyProperties only depends on the route param, so it can run in
  // parallel with the (instant) cookie-based checkSession.
  const [{ session, userData }, listings] = await Promise.all([
    checkSession(),
    getMyProperties(userId, 1, 5),
  ])


  //fetch user properties for the id 
  if(userData.docId==userId){
    const myInfo=await getMe();
    return (
      <ClientComp>
        <main className="mx-auto w-[98%] sm:w-[90%] lg:w-[80%]">
          <Profile
            userId={session ? userData.docId : ''}
            profileData={myInfo}
            is_Admin={userData.is_Admin}
            listings={listings}
          />
        </main>
      </ClientComp>
    )
  }
  
  if(userData.is_Admin){
    const user=await getUserKyc(userId)
    return(
      <ClientComp>
        <main className="mx-auto w-[98%] sm:w-[90%] lg:w-[80%]">
          <Profile
            userId={session ? userData.docId : ''}
            profileData={user}
            is_Admin={userData.is_Admin}
            listings={listings}
          />
        </main>
      </ClientComp> 
    )
  }

  const userProfileData = await getUser(userId)
  return (
    <ClientComp>
      <main className="mx-auto w-[98%] sm:w-[90%] lg:w-[80%]">
        <Profile
          userId={session ? userData.docId : ''}
          profileData={userProfileData}
          is_Admin={userData.is_Admin}
          listings={listings}
        />
      </main>
    </ClientComp>
  )



}
