import TaskItem from './TaskItem'

const TaskList = ({tasks, onDelete, onEdit}) => {
    return (
        <div>{tasks.map(task => <TaskItem onDelete={onDelete} onEdit={onEdit} key={task.id} task={task}/>)}</div>
    )
}

export default TaskList