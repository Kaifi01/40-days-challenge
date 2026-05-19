

const Product = ({product,handlecart,isadded}) => {

    
  return (
  <>
  <div className="bg-white p-5 rounded shadow flex justrify-between items-center">
    <div className="text-2xl font-bold">
 <h1>
 {product.name}
    </h1>
    <p className="text-gray-600 text-lg">{product.price}</p>
    </div>


  <div>
    <button  className={`px-5 py-2 rounded text-white font-semibold ${
          isadded
            ? "bg-green-500"
            : "bg-blue-500 hover:bg-blue-600"
        }`} onClick={()=>handlecart(product)}>{isadded ? "added" : "Add to cart"}</button>
  </div>
  </div>
  </>
  )
}

export default Product