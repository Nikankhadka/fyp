
import '../styles/globals.css'
import ClientComp from '../components/clientComp';
import ModalRegistry from '../components/modals/ModalRegistry';
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' })

export const metadata = {
  title: 'Meroghar - Discover Extraordinary Homes',
  description: 'Browse verified homes, apartments, cabins, and guest houses across the Meroghar marketplace.',
  icons: {
    icon: '/house.png',
  },
}

export default async function RootLayout({children}: {children: React.ReactNode}) {



  return (
    <html className={nunitoSans.variable} lang="en">
      <body className="flex flex-col font-sans bg-background text-onBackground min-h-screen">
        

        <ClientComp>

          <ModalRegistry />
          
           
        </ClientComp>
        
        {children}
      
      
      </body>
    </html>
  )
}
