import React from 'react'
import {useSelector} from '/react-redux'
import { removeTodo } from '../features/todo/todoSlice';
import {useDispatch} from 'react-redux'





function Todos() {

  const todos = useSelector(state => state.todos)
  console.log(todos);

  const dispatch = useDispatch()
  
  return (
   <>
   <div>Todo</div>
   <ul className=''>
    {todos.map((todo) => {
      <li  key={todo.id} >
        <div className=''>
          {todo.text}
        </div>
        <button
        onClick={() => dispatch(removeTodo(todo.id))}
        >delete</button>

      </li>
    })}
   </ul>
   </>
  )
}

export default Todos