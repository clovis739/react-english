import React,  {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'


function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }
  return (
   <form className='space-x-3 mt-12'
   onSubmit={addTodoHandler}>
    <input 
    type='text'
    className='bg-gray-500 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    placeholder='enter todo here ....'
    value={input}
    onChange={(e) =>(e.target.value)} />
   <button  type='submit'
   className='text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-950 rounded text-lg' >
    Add Todo
 
   </button>

   </form>
  )
}

export default AddTodo