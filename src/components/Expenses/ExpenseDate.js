import './ExpenseDate.css';
function ExpenseDate(props)
{
    const month=props.dateinfo.toLocaleString('en-US',{month:'long'});
    const year=props.dateinfo.getFullYear()
    const date=props.dateinfo.toLocaleString('en-US',{day:'2-digit'});
    return (<div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{date}</div>
    </div>)

}
export default ExpenseDate;