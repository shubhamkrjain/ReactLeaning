import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
//let counter = 5;
  const addValue = () => {
  //counter += 1;
  console.log("Counter value:", counter);
  
  if(counter < 20) {
    setCounter(counter + 1);
  }
  
  console.log("Counter value:", counter);
}
const substractValue = () => {
  if(counter > 0) {
  setCounter(counter - 1);
  }
  console.log("Counter value:", counter);
}
  return (
    <>
      <h1>chai and code</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={substractValue}>Subtract Value</button>
    </>
  )
}

export default App
