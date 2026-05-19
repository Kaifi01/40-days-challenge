

const UserCard = ({user}) => {

   function handleclick(){
    alert(`hello ${user.name}`)
   }
  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl duration-300">
{/* user name */}
 <h2 className="text-2xl font-bold">{user.name} </h2>
  {/* user Age */}
  <p className="mt-2 text-gray-50"> Age {user.age} </p>

   {/*conditinal rendering */}
   <p className="mt-2 font-semibold">
    {user.age >=18 ? "Adult":"Minor"}
   </p>

   {/* button */}
   <button onClick={handleclick}> Show Alert</button>
    </div>

  )
}

export default UserCard