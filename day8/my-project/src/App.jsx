import { useState } from "react"


function App() {
   const [count,setcount]=useState(0)
   
   const increse=()=>{
    if (count < 10) {
       setcount(count +1)
    }
   }

   const decrese=()=>{
    if (count > 0) {
       setcount(count-1)
    }
   }
   const reset=()=>{
    setcount(0)
   }
  return (

   <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-[350px]">
        <h1 className="text-3xl font-bold mb-6">
          React Counter App
        </h1>

        <h2
          className={`text-6xl font-bold mb-8 ${
            count > 5
              ? "text-green-500"
              : count < 3
              ? "text-red-500"
              : "text-orange-500"
          }`}
        >
          {count}
        </h2>

        <div className="flex justify-center gap-3 mb-5">
          <button
            onClick={ increse}
            className="bg-black text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Increase
          </button>

          <button
            onClick={decrese}
            className="bg-black text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Decrease
          </button>

          <button
            onClick={reset}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Reset
          </button>
        </div>

        <p className="text-gray-600">
          Limit: 0 to 10
        </p>
      </div>
    </div>
   </>
  )
}

export default App
