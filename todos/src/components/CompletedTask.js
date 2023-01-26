import React from "react";
import del from "icons/delete.svg";
import { useDispatch } from "react-redux";
import { deleteTodo } from "actions/index";

function CompletedTask(props) {
  const dispatch = useDispatch();

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
      <span className="todo__completed-time">Completed in a day</span>
    </div>
  );
}

export default CompletedTask;
