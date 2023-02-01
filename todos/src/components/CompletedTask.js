import React from "react";
import del from "icons/delete.svg";
import { useDispatch } from "react-redux";
import { deleteTodo } from "actions/index";
import { parse, differenceInDays } from "date-fns";

function CompletedTask(props) {
  const dispatch = useDispatch();

  // //Calculating the completation duration in days
  const startingDate = parse(props.date, "dd/MM/yyyy", new Date());
  const endingDate = parse(props.completedDate, "dd/MM/yyyy", new Date());
  const differenceInDay = differenceInDays(endingDate, startingDate);

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
      {differenceInDay === 0 ? (
        <span className="todo__completed-time">Completed in a day</span>
      ) : (
        <span className="todo__completed-time">
          Completed in {differenceInDay} days
        </span>
      )}
    </div>
  );
}

export default CompletedTask;
