import { useState } from "react";
import MonthlyGoalsEdit from "./MonthlyGoalsEdit";
import WeeklyGoalsList from "./WeeklyGoalsList";

const MonthlyGoalsItem = ({monthlyGoal, onDelete, onEdit}) => {

    const [editable, setEditable] = useState(false);

    const handleClickDelete = () => {
        onDelete(monthlyGoal.id)
    };

    const handleClickEdit = () => {
        setEditable(true);
    }

    const handleEditState = () => {
        setEditable(false);
    }

    return (
    <div>
        <div onDoubleClick={handleClickEdit}>
            {editable === false ? 
            <h2>{monthlyGoal.input}</h2>
            :
            <MonthlyGoalsEdit monthlyGoal={monthlyGoal} onEdit={onEdit} onSave={handleEditState}/>
            }
        </div>
        <WeeklyGoalsList />
        <button onClick={handleClickDelete}>Delete goal</button>
    </div>
    )
};

export default MonthlyGoalsItem