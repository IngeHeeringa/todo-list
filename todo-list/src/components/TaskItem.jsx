const TaskItem = ({task, onDelete, onEdit}) => {

    const handleClickDelete = () => {
        onDelete(task.id)
    }

    const handleClickEdit = () => {
        onEdit(task.id)
    }

    return (
        <div>
            <h2>{task.name}</h2>
            <button onClick={handleClickDelete}>Delete task</button>
            <button onClick={handleClickEdit}>Edit task</button>
        </div>
    )
}

export default TaskItem