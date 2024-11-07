import React from 'react'

function TaskStats() {
  return (
    <div className='mt-10 flex screen justify-between gap-5'>
        <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskStats