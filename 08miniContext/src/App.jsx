import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContext'

function App() {
  

  return (
   <UserContextProvider>
      <h1>
        React youtube videos to watch and learn 
      </h1>
      <Login/>
      <Profile/>
   </UserContextProvider>
  )
}

export default App
