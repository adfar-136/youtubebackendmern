import React, { useState } from 'react'

function TaskForm({fetchTasks}) {
    const [title,setTitle] = useState("");

    const [description,setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [dueDate, setDueDate] = useState("");
   async function handleSubmit(e){
    e.preventDefault();
    const response =await fetch("http://localhost:8000/tasks",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({title,description,dueDate,priority})
    })
    const res = await response.json()
    console.log(res)
    fetchTasks()
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title :</label>
            <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <label>Description :</label>
            <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <br/>
            <label>Due Date :</label>
            <input type="date" name="dueDate" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
            <br/>
            <label>Priority :</label>
            <select name="priority" value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default TaskForm