import { getKycs } from "../../../api/server/user/getUser"
import ClientComp from "../../../components/clientComp"

import UserCard from "../../../components/card/userCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PageHeader, Button } from "../../../components/ui/primitives"


export default  async function KycRequest(){

  const KycRequests=await getKycs(1,10);

  if(KycRequests.length===0){
    return(
      <div className="mx-auto my-10 max-w-2xl">
        <PageHeader title="User KYC Requests" description="Review and verify user identity documents." />
        <p className="text-center text-sm text-neutral-600">No KYC requests to verify.</p>
      </div>
    )
  }


   return(
      <div className="mx-auto w-[96%] p-2">
        <PageHeader title="User KYC Requests" description="Review and verify user identity documents." />

        <div className="mx-auto my-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ClientComp>
            {KycRequests.map((data, index) => (
              <UserCard userData={data} key={index} />
            ))}
          </ClientComp>
        </div>

        {KycRequests.length > 10 && (
          <div className="flex items-center justify-end gap-2 border-t border-neutral-200 bg-white p-4">
            <Button tone="secondary" type="button">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>
            <Button tone="secondary" type="button">
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
   )
}
