import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "Shubham",
    age: 25,
  }
  let newArr=[1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">TailWind test</h1>
      < Card username ="shubham" btnText="Click Me" />
      < Card username="Jain"/>
    </>
  )
}

export default App
