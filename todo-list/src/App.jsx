import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import Button from './components/Button'

function App() {
  
  const [tasks, setTasks] = useState([{id: 1, name: 'study React'}, {id: 2, name: 'create todo list'}, {id: 3, name: 'do bootcamp'}])

  const createTask = (taskName) => {
    const updateTask = [...tasks, {id: Math.random() * 9999, name: taskName}];
    setTasks(updateTask);
  }

  const deleteTaskById = (taskId) => {
    const updateTask = tasks.filter(task => {
      return task.id !== taskId;
    })
    setTasks(updateTask);
  }

  const editTaskById = (taskId, newTask) => {
    const updateTask = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, name: newTask}
      }
      return task
    })
    setTasks(updateTask);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskList onDelete={deleteTaskById} onEdit={editTaskById} tasks={tasks} />
      <TaskInput onCreate={createTask}/>
    </div>
  )
}

export default App
