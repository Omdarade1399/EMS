import React from 'react'
import Header from '../ConstantComps/Header'
import TaskStats from '../ConstantComps/TaskStats'
import TaskList from '../../taskList/TaskList'

function EmployeeDashboard({data}) {
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header data={data} />
        <TaskStats data={data}/>
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard