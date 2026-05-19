

const CartPage = ({cart}) => {
    
    const total=cart.reduce((sum,item)=>{
 return   sum + item.price
    },0)
    
  return (
<> 

<div className="bg-white p-5 rounded shadow h-fit  ">
    <h1 className="text-3xl font-bold mb-5"> Cart Page </h1>
    <h2 className="text-xl mb-2">Total items: {cart.length}</h2>
    <h2 className="text-xl font-semibold mb-5">Total price : ${total}</h2>
 <div className="">
    {cart.map((item)=>{
 return <div key={item.id} className="border p-3 rounded flex justify-between"> <div>{item.name}</div> <div>{item.price}</div></div>
})}
 </div>
</div>
</>
  )
}

export default CartPage