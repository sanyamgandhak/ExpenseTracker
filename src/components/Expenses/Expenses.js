import React, { useState } from 'react';

import ExpenseItem from  './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'


function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log('inside expenses')
    // console.log(selectedYear)
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.item.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

    return(
        <div> 
        <Card className="expenses">  
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
              <ExpensesChart expenses={filteredExpenses} />

        {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> :  filteredExpenses.map(expense =><ExpenseItem kry={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>) } */}
        {filteredExpenses.length === 0 && <p>No expenses found.</p> }
        {filteredExpenses.length > 0 && filteredExpenses.map(expense =><ExpenseItem kry={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>) }
        {/* <ExpenseItem 
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
          /> */}
        </Card></div>
       
      
    );
};



export default Expenses

