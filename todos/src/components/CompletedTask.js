import React from "react";
import del from "icons/delete.svg";
import { useDispatch } from "react-redux";
import { deleteTodo } from "actions/index";

function CompletedTask(props) {
  const dispatch = useDispatch();

  //formating the dates as MM/DD/YY from DD/MM/YY
  const [startingDay, startingMonth, startingYear] = props.date.split("/");
  const startingDate = `${startingMonth}/${startingDay}/${startingYear}`;
  const [endingDay, endingMonth, endingYear] = props.completedDate.split("/");
  const endingDate = `${endingMonth}/${endingDay}/${endingYear}`;
  const createdDate = new Date(startingDate);
  const completedDate = new Date(endingDate);

  //Calculating the difference
  const difference = completedDate - createdDate;
  const differenceInDays = difference / (1000 * 60 * 60 * 24);

  return (
    <div className="todo-del-duration">
      <button
        className="todo__icon-btn"
        onClick={(event) => {
          dispatch(deleteTodo(props.id));
        }}
      >
        <img src={del} alt="icon"></img>
      </button>
      {differenceInDays === 0 ? (
        <span className="todo__completed-time">Completed in a day</span>
      ) : (
        <span className="todo__completed-time">
          Completed in {differenceInDays + 1} days
        </span>
      )}
    </div>
  );
}

export default CompletedTask;
