import React, {useState} from 'react'; 
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [formToggle, setFormToggle] = useState(false);

  const expandAddNewExpenseHandler = () => {
    setFormToggle(true); 

  }

  const disableAddNewExpenseFormHandler = () => {
    setFormToggle(false); 
  }


  return (
    <div className="new-expense">
      {!formToggle && <button onClick={expandAddNewExpenseHandler}> Add Expense</button>}
      {formToggle && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHanlder} onDisable={disableAddNewExpenseFormHandler}/>}
    </div>
  );
};

export default NewExpense;
