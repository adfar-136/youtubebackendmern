import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {
  const [tasks,setTasks] = useState([])
  const fetchTasks = async()=>{
    var task = await fetch('http://localhost:8000/tasks');
    var finalTasks = await task.json();
    setTasks(finalTasks);

  }
  useEffect(()=>{
    fetchTasks()
  },[])
  return (
    <div>
     <h1>Todo Application</h1>
     <TaskForm fetchTasks={fetchTasks}/>
     <TaskList tasks= {tasks} fetchTasks={fetchTasks}/>
    </div>
  );
}

export default App;
