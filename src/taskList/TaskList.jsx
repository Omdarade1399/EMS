import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
        {data.tasks.map((elem, idx) => {
            if(elem.activeTask){
                return <AcceptTask key={idx}/>
            }
            if(elem.newTask){
                return <NewTask key={idx}/>
            }
            if(elem.completedTask){
                return <CompleteTask key={idx}/>
            }
            if(elem.failedTask){
                return <FailedTask key={idx}/>
            }
        })}
    </div>
  )
}

export default TaskList