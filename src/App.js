import React, {useState} from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Stationery',
    amount: 14.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Netflix', amount: 10.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Grocery',
    amount: 94.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler =(expense) =>
  {
    setExpenses(prevExpenses =>{return [expense, ...prevExpenses]});
    
  }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense expense={expenses} ></Expense>
        </div>
      
  );
}

export default App;
