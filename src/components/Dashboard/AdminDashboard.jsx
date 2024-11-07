import React from 'react'
import Header from './../ConstantComps/Header';
import CreateTaskForm from '../ConstantComps/CreateTaskForm';
import AllTasks from '../ConstantComps/AllTasks';

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <CreateTaskForm />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard