import React from 'react'
import Header from './../ConstantComps/Header';
import CreateTaskForm from '../ConstantComps/CreateTaskForm';
import AllTasks from '../ConstantComps/AllTasks';

function AdminDashboard({data}) {
  return (
    <div className='h-screen w-full p-10'>
        <Header data={data}/>
        <CreateTaskForm />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard