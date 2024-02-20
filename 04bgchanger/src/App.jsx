import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')
function changeColor(color) {
  setColor(color)

}

 
  return (
    <div
    className='w-full h-screen duration-200'style={{background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          
          <button onClick={() => changeColor('red')}
          style={{background: "blue" }}
          className="outline-none rounded-full text-black shadow-lg"> Test kit</button>
         
          <button onClick={() => changeColor('green')}
          style={{background: "red" }}className="outline-none rounded-full text-black shadow-lg"> Test kit 2</button>
         
          <button onClick={() => changeColor('blue')}
          style={{background: "yellow" }}className="outline-none rounded-full text-black shadow-lg"> Test kit 3</button>

  <button onClick={() => changeColor('orange')}
            style={{background: "orange" }}className="outline-none rounded-full text-black shadow-lg"> Test kit 4</button>

            <button onClick={() => changeColor('pink')}
          style={{background: "grey" }}className="outline-none rounded-full text-black shadow-lg"> Test kit 5</button>

<button onClick={() => setColor('violet')}
          style={{background: "black" }}className="outline-none rounded-full text-white shadow-lg"> Test kit 2</button>
          </div> 
      </div>  
    </div>
  )
}

export default App
