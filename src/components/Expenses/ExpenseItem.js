import React,{useState} from 'react';
import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
function ExpenseItem(props) {


  //  const [title,setTitle]= useState(props.title);

   
    // const clickHandler=()=>{
    //   setTitle('Updated!');
    // };

    // const month=props.date.toLocaleString('en-Us',{month:'long'});
    // const day=props.date.toLocaleString('en-Us',{day:'2-digit'});
    // const year=props.date.getFullYear();

    return (
    <Card className='expense-item'>
      
     <ExpenseDate date={props.date}/>
            
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>

    </Card>
  );

}
export default ExpenseItem;     