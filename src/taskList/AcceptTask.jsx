import React from 'react'

function AcceptTask({data}) {
  return (
    <div className='h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-5'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask