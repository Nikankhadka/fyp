//wil contain my reservations information

import { checkSession } from "../../../../api/server/auth";
import { getOnBookings } from "../../../../api/server/property/getReservation";
import { NoAuth } from "../../../../components/NoAuth";
import ClientComp from "../../../../components/clientComp";
import TripBookingClient from "../../../../components/listing/TripsReservationClient";
import { EmptyState, LinkButton, PageHeader } from "../../../../components/ui/primitives";


export default async function MyReservations() {
  const { session } = await checkSession()

  if (!session) {
    return (
      <main className="w-full">
        <ClientComp>
          <NoAuth
            Header="My Trips"
            header2="Log in to view your Trips/Reservations"
            header3="You can  View,Edit,Cancel your Trips once Logged In"
          />
        </ClientComp>
      </main>
    )
  }

  //fetch reservations made on my properties (only after the session
  // guard so we don't waste a credentialed network call for logged-out
  // visitors)
  const trips = await getOnBookings(1, 10)

  return (
    <main className="w-full">
      <PageHeader
        title="Reservations"
        description="Manage guest bookings for your properties."
      />
      {trips.length == 0 && (
        <EmptyState
          title="No reservations found"
          description="Guest bookings for your published properties will appear here."
          action={<LinkButton href="/Home/Account/listings" tone="secondary">Manage listings</LinkButton>}
        />
      )}

      {trips.length != 0 && (
        <div>
          <ClientComp>
            <TripBookingClient trips={false} bookings={trips} />
          </ClientComp>
        </div>
      )}
    </main>
  )
}
