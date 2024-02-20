import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
let myObj = {
  name : "clovis",
  age: 24,
  sex:"male",
  address:{
    city:"limbe",
    state:"southwest",
    country:"cameron"
  }
}
let newArr = [1,2,3,4,5,6,7,8,9]
  return (
    <>
      <h1 className='text-3xl bg-green-500 rounded-md  p-3'>welcome to tailwind clovis</h1>
      <Card username='tycriz' newArr= {myObj} />
      <Card username='tycriz' newArr= {myObj}/>
      <Card username='tycriz' newArr= {myObj}/>
      <Card username='tycriz' newArr= {myObj}/>
      <Card username='tycriz' post= 'staffeng'/>
      <Card username='tycriz' myArr={newArr}/>

    </>
  )
}

export default App
