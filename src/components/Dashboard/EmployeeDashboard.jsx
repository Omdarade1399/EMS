import React from 'react'
import Header from '../ConstantComps/Header'
import TaskStats from '../ConstantComps/TaskStats'
import TaskList from '../../taskList/TaskList'

function EmployeeDashboard(props) {
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header data={props.data} changeUser={props.changeUser}/>
        <TaskStats data={props.data}/>
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard