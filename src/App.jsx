import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen pt-6 bg-slate-900 text-white">
        <h1 className='text-3xl text-center font-bold bg-slate-400 rounded-md mx-4 py-2'>Welcome To my React</h1>
        <h2 className='text-center pt-5 text-2xl'>This Is useState: {count}</h2>
        <center className='py-5'>
          <button className="px-4 rounded-md py-2 text-1xl font-bold bg-sky-500 outline-none" onClick={() => setCount(count + 1)}>Click Me</button>
        </center>
      </div>
    </>
  )
}

export default App
