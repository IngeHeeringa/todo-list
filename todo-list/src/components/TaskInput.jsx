import { useState } from "react"

const TaskInput = ({onCreate}) => {

    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(newTask);
        setNewTask('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={newTask} />
                <button type="submit">Add task</button>
            </form>
        </div>
    )
}

export default TaskInput