import { useState } from "react"

const TaskEdit = () => {

    const [taskName, setTaskName] = useState('')

    const handleChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTaskName('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
            </form>
        </div>
    )
}

export default TaskEdit