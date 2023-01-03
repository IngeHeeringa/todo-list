import { useState } from "react";
import MonthlyGoalItem from "./MonthlyGoalItem";

export default function GoalTracker() {
    const [goals, setGoals] = useState('');
    const [goalsList, setGoalsList] = useState([]);

    const handleChange = (event) => {
        setGoals(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const tempList = goalsList;
        tempList.push(goals);
        setGoalsList(tempList);
        console.log(goalsList);
        setGoals('');
    }

    return (
        <div>
            <h1>Goal Tracking App</h1>
            <ul>
                {goalsList.map(goal => <li><MonthlyGoalItem key={goal} name={goal}/></li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={goals}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}