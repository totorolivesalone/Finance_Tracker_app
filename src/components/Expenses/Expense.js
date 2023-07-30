import ExpenseItem from './ExpenseItem';
import React ,{useState} from 'react'
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
function Expense(props)
{
    const [filteredYear, setFilteredYear]=useState('2020');
    const dropDownHandler = (selectedYear) =>
    {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses =props.expense.filter(expense =>{return expense.date.getFullYear().toString()=== filteredYear});
    
    return(
        
        <Card className="expenses">
            <ExpenseFilter  onChangeFilter={dropDownHandler} selectedYear={filteredYear}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />;
        
   
    </Card>);
}
export default Expense;