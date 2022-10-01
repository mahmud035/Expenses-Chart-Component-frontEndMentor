import './App.css';
import ExpenseChart from './Components/ExpenseChart/ExpenseChart';
import MonthExpenses from './Components/MonthExpenses/MonthExpenses';
import MyBalance from './Components/MyBalance/MyBalance';

function App() {
  return (
    <div>
      <MyBalance></MyBalance>
      <ExpenseChart></ExpenseChart>
      <MonthExpenses></MonthExpenses>
    </div>
  );
}

export default App;
