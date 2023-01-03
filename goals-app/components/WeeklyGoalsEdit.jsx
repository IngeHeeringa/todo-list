import { useState } from "react";

const WeeklyGoalsEdit = ({weeklyGoal, onEdit, onSave}) => {

    const [editableWeeklyGoal, setEditableWeeklyGoal] = useState('');

    const handleChange = (event) => {
        setEditableWeeklyGoal(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(weeklyGoal.id, editableWeeklyGoal);
        onSave(false);
        console.log(weeklyGoal.input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={editableWeeklyGoal}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default WeeklyGoalsEdit