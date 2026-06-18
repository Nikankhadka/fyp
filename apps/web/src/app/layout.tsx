
import '../styles/globals.css'
import ClientComp from '../components/clientComp';
import ModalRegistry from '../components/modals/ModalRegistry';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default async function RootLayout({children}: {children: React.ReactNode}) {



  return (
    <html className={inter.variable}>
      <head />
      <body className="flex flex-col font-sans">
        

        <ClientComp>

          <ModalRegistry />
          
           
        </ClientComp>
        
        {children}
      
      
      </body>
    </html>
  )
}
