import { CalendarIcon } from 'lucide-react'
import React from 'react'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <button  className='cursor-pointer flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'>
        <CalendarIcon className='mr-2 h-4 w-4' />
        HELLO!</button>
    </div>
  )
}

export default App