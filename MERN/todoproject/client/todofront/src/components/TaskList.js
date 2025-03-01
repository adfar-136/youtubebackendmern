import React from 'react'

function TaskList({tasks,fetchTasks}) {
  async function handleToggle(task,id){
       const res =await fetch(`http://localhost:8000/tasks/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({...task,completed:!task.completed})
       })
       const response = await res.json()
       console.log(response)
       fetchTasks()
  }
  async function handleDelete(task){
    const res =await fetch(`http://localhost:8000/tasks/${task._id}`,{
     method: "DELETE", 
    })
    const response = await res.json()
    console.log(response)
    fetchTasks()
}
  return (
    <div>
        {tasks.map((task, index) => (
            <>
               <h1>Title : {task.title}</h1>
               <p>Descriptio : {task.description}</p>
               <p>Due Date : {new Date(task.dueDate).toLocaleDateString()}</p>
               <p>Priority: {task.priority}</p>
               <button onClick={()=>handleToggle(task,task._id)}>COmpleted : {task.completed ? "TRUE" : "FALSE"}</button>
              <button onClick={()=>handleDelete(task)}>Delete</button>
            </>
        ))}
    </div>
  )
}

export default TaskList