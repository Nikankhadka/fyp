
import '../styles/globals.css'
import ClientComp from '../components/clientComp';

import ModalRegistry from '../components/modals/ModalRegistry';

export default async function RootLayout({children}: {children: React.ReactNode}) {



  return (
    //toggle dark mode by getting dark mode from 
    <html>
      <head />
      {/* body sets the root layout for entire application */}
      <body className="flex flex-col font-sans">
        

        {/* conditionally render navbar  */}
      
        <ClientComp>

          {/* this component are kind of hassle donot repeat them on other layouts since they have shared state 
          overlapping will cause modal to bug and close  on click since they are in root layout they are rendered through out the 
          application */}
          <ModalRegistry />
          
           
        </ClientComp>
        
        {/* this children represents each page component  that is rendered */}
        {children}
      
        
        
      </body>
    </html>
  )
}
