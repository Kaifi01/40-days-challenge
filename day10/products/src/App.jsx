
import { useState } from 'react'
import './App.css'
import Product from './components/Product';
import CartPage from './components/CartPage';

function App() {
const products = [
  {id:1, name:"Phone", price:200},
  {id:2, name:"Laptop", price:800},
  {id:3, name:"Headphones", price:50},
]
 const [search,Setsearch]=useState("");
 const [cart,Setcart]=useState([]);
// console.log(cart);
 
    const filterproduct=products.filter((product)=>{
        return product.name.toLowerCase().includes(search.toLowerCase())
    })

   // console.log(filterproduct);

   const addtocart=(product)=>{
    Setcart([...cart,product])
   }
    // console.log(addtocart);
     
  return (
 <>
   <div className='min-h-sceen bg-gray-100 p-5'>
     <h1 className='text-4xl font-bold text-center mb-8'>Shopping Cart</h1>
       {/* Main Layout */}
 <div className='grid md:grid-cols-2 gap-8'>
   {/*left side */}
 <div >
<input type="text"value={search}  onChange={(e)=>Setsearch(e.target.value)}    className="border border-gray-300 p-2 rounded w-full mb-5" placeholder='Enter ' />
  <div className='space y-4'>
    {filterproduct.map((product)=>{

    const isadded=cart.find((item)=>item.id===product.id)
       return   <Product key={product.id} product={product} handlecart={addtocart} isadded={isadded}/>
       
   })}
  </div>
     </div>

     {/*right side */}
    <CartPage cart={cart}/>
 </div>
    
 
   
   </div>
  
  
 </>
  )
}

export default App
