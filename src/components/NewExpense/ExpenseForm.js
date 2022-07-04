import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const titleChangeHanlder = (event) => {
    setInputTitle(event.target.value);
  };

  
  const submitHanlder = (event) => {
    event.preventDefault();
    const inputData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };
    
    props.onSaveExpenseData(inputData);
    setInputTitle("");
    setInputDate("");
    setInputAmount("");
    props.onDisable(); 
    console.log(inputData);
  };

 
  return (
    <form onSubmit={submitHanlder}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHanlder} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
          
            // step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onDisable}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
