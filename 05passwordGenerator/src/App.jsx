import { use, useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordGenerator = useCallback(() => {
    
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  //useRef hook
    const passwordRef = useRef(null);
     
    const copyPasswordGenerator = useCallback(() => {
      passwordRef.current?.select(); // Select the text in the input
      passwordRef.current?.setSelectionRange(0, 999); // For mobile devices
      window.navigator.clipboard.writeText(password).then(() => {
         setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Hide after 1 second
    });
    }, [password])

 useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500
    bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly 
            ref={passwordRef}/>
          <button onClick= {copyPasswordGenerator}className='
          outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>
            Copy</button>{copied && (
        <span style={{ marginLeft: '10px', color: 'green' }}>
          Copied!
        </span>
      )}
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={(e) => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor='numberInput'> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={(e) => { setCharAllowed((prev) => !prev) }}
            />
            <label htmlFor='charInput'> Characters</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default App

