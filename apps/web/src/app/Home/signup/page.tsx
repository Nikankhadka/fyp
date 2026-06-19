import { checkSession } from "../../../api/server/auth"
import LoginSignup from "../../../components/loginSignup"
import { redirect } from 'next/navigation';
export default async function Singup(){

    const session=await checkSession()
    
   
    
   if(!session.session)return(
        <main className="w-full bg-surface">
        <div className="flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-[540px]">
            <LoginSignup login={false} modal={false} />
          </div>
        </div>
            
        </main>
    )

    //else redirect to home 
    return redirect('/Home')
}  
