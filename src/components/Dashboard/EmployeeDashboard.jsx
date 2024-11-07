import React from 'react'
import Header from '../ConstantComps/Header'
import TaskStats from '../ConstantComps/TaskStats'
import TaskList from '../../taskList/TaskList'

function EmployeeDashboard() {
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header />
        <TaskStats />
        <TaskList />
      </div>
    </div>
  )
}

export default EmployeeDashboard