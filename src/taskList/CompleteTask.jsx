import React from 'react'

function CompleteTask(props) {
  return (
    <div className='h-full w-[300px] flex-shrink-0 p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{props.data.category}</h3>
                <h4 className='text-sm'>{props.data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{props.data.taskTitle}</h2>
            <p className='text-sm mt-2'>{props.data.taskDescription}</p>
            <div className='mt-5'>
                <button className='w-full bg-blue-500 py-1 px-2 text-sm'>Completed Task</button>
            </div>
        </div>
  )
}

export default CompleteTask