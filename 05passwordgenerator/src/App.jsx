import { useState ,useCallback} from 'react'

import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(9)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  const passwordRef=useRef(null)

const generatePassword = useCallback(()=>{
  let pass =""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  if(numberAllowed) str += "01234567899"
  if(charAllowed) str += "!$%&/()=?{}"

  for (let i =1; i < length; i++){
    const char = Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(char)

  }
  setPassword(pass)
}, [length, numberAllowed, charAllowed])


useEffect(()=>{
  generatePassword()
}, [length, numberAllowed, charAllowed])


const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
}

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3"> password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value={password }
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      
       />

       <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-950 text-white px-3
       py-0.5 shrink-0' > Copy</button>
       </div>
<div className="flex text-sm gap-x-3

">
  <div className="flex items-center gap-x-2">
    <input type="range"
    max={100}
    min={8}
    value={length}
    className='cursor-pointer'
    onChange={(e) => setLength(e.target.value)}
     name=""
      id=""
       />
       <label htmlFor="length">Length: {length}
       </label>
  </div>
  <div className="flex items-center gap-x-2">
   <input 
   type="checkbox"
   defaultChecked={numberAllowed}
   onChange={()=>{
    setNumberAllowed((prev)=>  !prev)
   }}
    name=""
     id="" 
     />
     <label htmlFor="number">Number</label>
  </div>
  <div className="flex items-center gap-x-2">
   <input 
   type="checkbox"
   defaultChecked={charAllowed}
   onChange={()=>{
    setCharAllowed((next)=>  !next)
   }}
    name=""
     id="" 
     />
     <label htmlFor="charater">character</label>
  </div>
</div>

    </div>
    )
}

export default App
