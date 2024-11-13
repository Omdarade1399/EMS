import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTasks() {

    const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-72'>
        <div className='bg-red-400 mb-3 py-2 flex justify-around px-4 rounded'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed Task</h5>
            <h5 className='w-1/5'>Failed Task</h5>
        </div>
        <div id='tasks' className='h-[80%] overflow-auto'>
            {authData.employees.map(function(elem, index){
                return  <div key={index} className='bg-transparent border border-emerald-400 mb-3 py-2 flex justify-between px-4 rounded'>
                            <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
                            <h3 className='w-1/5 text-blue-600'>{elem.taskCount.new}</h3>
                            <h5 className='w-1/5 text-yellow-600'>{elem.taskCount.active}</h5>
                            <h5 className='w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
                            <h5 className='w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
                        </div>
            })}
        </div>
    </div>
  )
}

export default AllTasks