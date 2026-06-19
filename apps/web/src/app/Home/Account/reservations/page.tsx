//wil contain my reservations information 

import { checkSession } from "../../../../api/server/auth";
import {getOnBookings } from "../../../../api/server/property/getReservation";
import { NoAuth } from "../../../../components/NoAuth";
import ClientComp from "../../../../components/clientComp";
import TripBookingClient from "../../../../components/listing/TripsReservationClient";
import { EmptyState, LinkButton, PageHeader } from "../../../../components/ui/primitives";


export default async function MyTrips(){
    
    const {session,userData}=await checkSession()
    const trips=await getOnBookings(1,10)
   
   


    if(!session){
        return(
          
            <main className="w-full">
            <ClientComp>
                <NoAuth  Header="My Trips" header2="Log in to view your Trips/Reservations" header3="You can  View,Edit,Cancel your Trips once Logged In"/>
            </ClientComp>
            </main>
           
    )
    }

//fetch trip/bookings made by me
    return(
        <main className="w-full">
            <PageHeader
              title="Reservations"
              description="Manage guest bookings for your properties."
            />
            {
             trips.length==0&&
              <EmptyState
                title="No reservations found"
                description="Guest bookings for your published properties will appear here."
                action={<LinkButton href="/Home/Account/listings" tone="secondary">Manage listings</LinkButton>}
              />

            }
            
            {
             trips.length!=0&&<div>
                                 <ClientComp>
                                     <TripBookingClient trips={false} bookings={trips} />
                                 </ClientComp>
                             </div>

            }
        </main>
    )
}
