import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import MonthlyGoalsList from './components/MonthlyGoalsList'
import MonthlyGoalsInput from './components/MonthlyGoalsInput'


function App() {
  const [monthlyGoals, setMonthlyGoals] = useState([]);

  const createGoal = (goalInput) => {
    const updateGoal = [...monthlyGoals, {id: Math.floor(Math.random() * 9999), input: goalInput}];
    setMonthlyGoals(updateGoal);
  }

  const deleteGoalById = (goalId) => {
    const updateGoal = monthlyGoals.filter(monthlyGoal => monthlyGoal.id !== goalId);
    setMonthlyGoals(updateGoal);
  }

  const editGoalById = (goalId, editedGoal) => {
    const updateGoal = monthlyGoals.map(monthlyGoal => {
      if (monthlyGoal.id === goalId) {
        return {...monthlyGoal, input: editedGoal}
      }
    })
    setMonthlyGoals(updateGoal);
  }

  return (
    <div className="App">
      <Header />
      <MonthlyGoalsList monthlyGoals={monthlyGoals} onDelete={deleteGoalById} onEdit={editGoalById}/>
      <MonthlyGoalsInput onCreate={createGoal}/>
    </div>
  )
}

export default App
