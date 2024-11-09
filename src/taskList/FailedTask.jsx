import React from 'react'

function FailedTask() {
  return (
    <div className='h-full w-[300px] flex-shrink-0 p-5 bg-green-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>20 Feb 2024</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
    <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, adipisci? Nisi dignissimos aut nemo maiores.</p>
    <div className='mt-5'>
        <button className='w-full bg-purple-500 py-1 px-2 text-sm'>Failed Task</button>
    </div>
</div>
  )
}

export default FailedTask