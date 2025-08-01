import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrapper justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrapper justify-center gap-3 shadow-lg bg-white px-3 py-2
          rounded-xl">
            <button 
            onClick={() => setColor("red")}
            className="outlline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setColor("green")}
            className="outlline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "green"}}>Green</button>
            <button 
            onClick={() => setColor("blue")}
            className="outlline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={() => setColor("black")}
            className="outlline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{backgroundColor: "black"}}>Black</button>
            <button 
            onClick={() => setColor("purple")}
            className="outlline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "purple"}}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
