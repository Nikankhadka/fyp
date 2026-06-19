import { getAllProperties } from "../../../api/server/property/getProperty";
import AdminTable from "../../../components/admin/table";
import ClientComp from "../../../components/clientComp";
import { EmptyState } from "../../../components/ui/primitives";

export default  async function PropertyList(){

    const properties=await  getAllProperties(1,10)
    if(properties.length===0){
        return(
         
            <EmptyState title="No properties to display" description="Approved and moderated properties will appear here." />
          
        )
      }


    return(
        <main className="w-full">
            <ClientComp>
                <AdminTable use="property" users={[]} properties={properties} bookings={[]} />
            </ClientComp>
        </main>
    )
    
        
          
      
}
