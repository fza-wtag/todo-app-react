import React from "react";
import del from "icons/delete.svg";
import { useDispatch } from "react-redux";
import { deleteTodo, selectedCardId } from "actions/index";
import { parse, differenceInDays } from "date-fns";
import classNames from "classnames";

function CompletedTask({ loading, id, date, isCompleted, completedDate }) {
  const dispatch = useDispatch();

  // Calculating the completation duration in days
  const startingDate = parse(date, "dd/MM/yyyy", new Date());
  const endingDate = parse(completedDate, "dd/MM/yyyy", new Date());
  const differenceInDay = differenceInDays(endingDate, startingDate);

  const handleDelete = () => {
    dispatch(selectedCardId(id));
    dispatch(deleteTodo(id));
  };

  let completedText;
  if (differenceInDay === 0) {
    completedText = "Completed in a day";
  } else {
    completedText = `Completed in ${differenceInDay + 1} days`;
  }
  const mainDivClassname = classNames("todo-del-duration", {
    "todo-del-duration--off": loading,
  });
  return (
    <div className={mainDivClassname} data-testid="completed-task-component">
      <button
        className="todo__icon-btn"
        onClick={handleDelete}
        data-testid="com-delete-btn"
      >
        <img src={del} alt="icon"></img>
      </button>
      <span className="todo__completed-time">{completedText}</span>
    </div>
  );
}

export default CompletedTask;
