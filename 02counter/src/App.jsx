import { useState } from 'react'


function App() {
// let counter = 15
//let remove = counter
const [counter, setCount] =useState(0)
const addvalue = ()=>{
  // counter ia variable while 
  //setCounter is an object or still calla function
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  

  console.log(counter)
}
const removeValue = ()=>{
  setCount((backCounter) => backCounter - 1)
  setCount((backCounter) => backCounter - 1)
  setCount((backCounter) => backCounter - 1)
  setCount((backCounter) => backCounter - 1)
}

  return (
    <>
      <h1>react course with clovis: {counter}</h1>
      <h2>counter value:{counter} </h2>
      <button
      onClick={addvalue}>add value</button> {" "}
      <button
      onClick={removeValue}>remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
