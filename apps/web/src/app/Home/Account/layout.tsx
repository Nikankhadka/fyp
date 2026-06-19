

import { redirect } from 'next/navigation';
import { checkSession } from '../../../api/server/auth';
import { PageContainer } from '../../../components/ui/primitives';






export default async function Layout({children}: {children: React.ReactNode}) {

    const {session,userData}=await checkSession()

    if(!session) return redirect('/')
    if(userData.is_Admin) return redirect('/')
  

  return (

      <main className="flex flex-col">
        {/* this children represents each page component  that is rendered */}
        <PageContainer className="py-6">
          {children}
        </PageContainer>
      </main>
    
  )
}
