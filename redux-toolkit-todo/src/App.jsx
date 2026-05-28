import { useState } from 'react'
import Addtodo from './components/Addtodo.jsx'
import Todos from './components/Todos.jsx'
function App() {

  return (
    <>
      <div className='container mx-auto px-20'>
        <h1 className='text-center text-white font-extrabold text-3xl mt-10'>Learn about redux tool kit</h1>
        <Addtodo />
        <Todos />
      </div>
    </>
  )
}

export default App
