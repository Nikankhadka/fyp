import { getAllUsers } from "../../../api/server/user/getUser";
import AdminTable from "../../../components/admin/table";
import ClientComp from "../../../components/clientComp";
import { EmptyState } from "../../../components/ui/primitives";

export default  async function UsersList(){

    const users=await  getAllUsers(1,10);
    if(users.length===0){
        return(
         
            <EmptyState title="No users to display" description="User records will appear here after accounts are created." />
          
        )
      }


    return(
        <main className="w-full">
            <ClientComp>
                <AdminTable use="user" users={users} properties={[]} bookings={[]} />
            </ClientComp>
        </main>
    )
    
        
          
      
}
