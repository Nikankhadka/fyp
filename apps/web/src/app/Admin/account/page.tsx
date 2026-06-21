

import ClientComp from "../../../components/clientComp";
import { getMe } from "../../../api/server/user/getUser";
import Profile from "../../../components/user/profile";
import { checkSession } from "../../../api/server/auth";





export default async function AccountSetting(){
  const [session, userData] = await Promise.all([
    checkSession(),
    getMe(),
  ])
  

    return(
    

      <ClientComp>
      <div className="w-full">
      <Profile userId={session.session?session.userData.docId:""} profileData={userData} is_Admin={true} listings={[]} />
      </div>
      </ClientComp>
      


    )
}
