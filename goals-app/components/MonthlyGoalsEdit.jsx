import { useState } from "react";

const MonthlyGoalsEdit = ({monthlyGoal, onEdit, onSave}) => {

    const [editableMonthlyGoal, setEditableMonthlyGoal] = useState(monthlyGoal.input);

    const handleChange = (event) => {
        setEditableMonthlyGoal(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(monthlyGoal.id, editableMonthlyGoal);
        onSave(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={editableMonthlyGoal}/>
                <button type="submit">Save changes</button>
            </form>
        </div>
    )
}

export default MonthlyGoalsEdit