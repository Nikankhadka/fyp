import { Loader2 } from 'lucide-react'


export default function LoadingPage() {
  return (
    <main className=" w-full">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    </main>
  )
}