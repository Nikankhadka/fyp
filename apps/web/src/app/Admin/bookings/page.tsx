import { getAllBookings } from "../../../api/server/property/getReservation";
import AdminTable from "../../../components/admin/table";
import ClientComp from "../../../components/clientComp";
import { EmptyState, PageHeader } from "../../../components/ui/primitives";

export default async function Bookings(){

    const bookings=await getAllBookings(1,10)


    if(bookings.length===0){
        return(
         
            <EmptyState title="No bookings to display" description="Booking records will appear here when guests reserve properties." />
          
        )
      }

    return(
        <main className="w-full">
           <PageHeader title="Bookings" description="Review booking activity across guests and hosts." />
            <ClientComp>
                <AdminTable use="booking" bookings={bookings} />
            </ClientComp>
          
        </main>
      
    )
}
