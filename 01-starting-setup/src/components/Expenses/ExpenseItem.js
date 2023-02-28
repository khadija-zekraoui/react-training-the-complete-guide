import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// this function is called only one time.
const ExpenseItem = (props) => {
  // if this variable is changed the component function will not be called again
  // let title = props.title;

  // Create a special variable that, if it changes, the component function will be called again
  const [title, setTitle] = useState(props.title); //returns an array [the variable itself, the updating function ]

  const clickHandler = () => {
    //When we call this state updating function, the variable title will be updated and the component function will be executed again
    setTitle("updated");
  };
  return (
    // one DIV is allowed
    <Card className="expense-item">
      {/* self closing element because it doesn't have content */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
