export default function WeeklyGoalsList() {
    return (
        <div>
            <ul>
                {goalsList.map(goal => <li><MonthlyGoalItem key={goal} name={goal}/></li>)}
            </ul>
        </div>
    )
}