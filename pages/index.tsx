import type { NextPage } from 'next'
import { useState } from 'react'
import Todo from '../components/Todo'


const Home: NextPage = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([{
    id: 1,
    text: "Learn Next.js",
  }])

  return (
    <div className="flex flex-col w-full justify-center items-center select-none">
      <div className='w-full flex justify-center mt-5'>
        <input type="text" placeholder='Todo' className='todo-input bg-bg w-96 text-lg' />
        <button className='w-20 h-8 text-lg text-btn rounded font-bold tracking-wider antialiased transition-all duration-150 hover:text-yellow-400 hover:-translate-y-[1px] hover:shadow'
          type="button"
          onChange={(e: any) => { setTodo(e.target.value) }}

        >
          Add
        </button>
      </div>
      <div className='w-4/6 flex justify-center mt-5 '>
        {todos.map((todo:any) => (
          <Todo text={todo.text }/>
        ))}
      </div>
    </div>
  )
}

export default Home
