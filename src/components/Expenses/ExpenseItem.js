import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';


function ExpenseItem(props) {

    //useState gives access to that props.title variable, so we can change it and display it
    //useState returns an array with 2 variables
    //first one is the value itself
    //second one is the function to update that value
    //we are using array destructuring here to set that value
    
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        //setTitle doesn't just update the value, but the 
        //component function which you called setTitle will be executed again
        setTitle('Updated');
    };
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;