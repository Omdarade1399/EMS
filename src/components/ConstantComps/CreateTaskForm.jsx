import React, { useEffect, useState } from 'react'

function CreateTaskForm() {

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        const task = {
            taskTitle,
            taskDate,
            category,
            taskDescription,
            activeTask: false,
            newTask: true,
            completedTask: false,
            failedTask: false,
        };

        const data = JSON.parse(localStorage.getItem("employees"))
        data.forEach((elem) => {
            if(elem.firstName === assignTo){
                elem.tasks.push(task)
            }
        })
        localStorage.setItem("employees", JSON.stringify(data))

        setTaskTitle("")
        setTaskDate("")
        setAssignTo("")
        setCategory("")
        setTaskDescription("")
    }

  return (
            <div className='p-5 bg-[#1c1c1c] mt-8 rounded'>
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] rounded-md border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] rounded-md border-gray-400 mb-4' type="date" name="" id="" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] rounded-md border-gray-400 mb-4' type="text" placeholder='Employee Name'/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] rounded-md border-gray-400 mb-4' type="text" placeholder='Design, Dev, etc' />
                        </div>
                    </div>
                        <div className='w-2/5 flex flex-col items-start'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                            <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className='w-full h-44 text-sm py-2 px-4 outline-none rounded-md bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                            <button type='submit' className='bg-emerald-500 py-3 hover:bg-emerald-600 duration-500 px-5 rounded-md text-sm mt-4 w-full'>Create Task</button>
                        </div>
                </form>
            </div>
  )
}

export default CreateTaskForm