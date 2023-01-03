import { useState } from "react";
import WeeklyGoalsItem from "./WeeklyGoalsItem"

const WeeklyGoalsList = () => {
    const [weeklyGoals, setWeeklyGoals] = useState([
        {id: 1, input: ''},
        {id: 2, input: ''},
        {id: 3, input: ''},
        {id: 4, input: ''}
    ]);

    const editWeeklyGoal = (goalId, goalInput) => {
        const updateGoal = weeklyGoals.map(weeklyGoal => {
            if (weeklyGoal.id === goalId) {
              return {...weeklyGoal, input: goalInput}
            }
          })
        setWeeklyGoals(updateGoal);
    }

    return (
        <div>
            {weeklyGoals.map((weeklyGoal, i) => <div key={i}><label>Week {i}</label><WeeklyGoalsItem key={i} weeklyGoal={weeklyGoal} onEdit={editWeeklyGoal}/></div>)}
        </div>
    )
}

export default WeeklyGoalsList