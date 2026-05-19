import { use, useState } from "react";
import UserCard from "./components/User/UserCard";


function App() {
 const users = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Aman", age: 17 },
    { id: 3, name: "Sara", age: 22 },
    { id: 4, name: "Nila", age: 15 },
  ];
   const [search, setSearch]=useState("");
    const filteuser=users.filter((user)=>{
    return   user.name.toLowerCase().includes(search.toLowerCase())

    
    }
   
    )
     console.log(filteuser);
     
  return (
 <>
 <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb-8">
   User List App
  </h1>
   {/*search */}
   <div className="flex justify-center p-6">
   <input type="text" placeholder="Search user..." value={search} onChange={(e)=>setSearch(e.target.value)} />

   </div>
  {/* ressponsive layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {filteuser.map((user)=>(
         <UserCard key={user.id} user={user}/>
    ))}

   
  </div>
 
 </div>
   
 </>
  )
}

export default App
