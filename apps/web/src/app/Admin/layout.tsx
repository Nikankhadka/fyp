
import SideBar from '../../components/navbar/sidebar';
import DashboardNav from '../../components/navbar/DashboardNav';
import ClientComp from '../../components/clientComp';
import { checkSession } from '../../api/server/auth';
import { redirect } from 'next/navigation';





export default async function Layout({children}: {children: React.ReactNode}) {


  const {session,userData}=await checkSession()

  if(!session) return redirect('/')
  if(!userData.is_Admin) return redirect('/')
  

  return (

      <main className="min-h-screen bg-surface">
      

        <ClientComp>
        <DashboardNav />
        </ClientComp>
      
        {/* this children represents each page component  that is rendered */}
        <div className="w-full px-4 pb-10 pt-24 md:ml-[220px] md:w-[calc(100%-220px)] md:px-6 md:pt-8 lg:ml-64 lg:w-[calc(100%-16rem)]">
          {children}
        </div>
        

        <ClientComp>  
        <SideBar is_Admin={userData.is_Admin} menu={false}  />
        </ClientComp>
        
        
        
      </main>
    
  )
}
