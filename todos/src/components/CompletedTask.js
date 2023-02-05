import React from "react";
import del from "icons/delete.svg";
import { useDispatch } from "react-redux";
import { deleteTodo } from "actions/index";

function CompletedTask(props) {
  const dispatch = useDispatch();
  const handleDelete = (event) => {
    dispatch(deleteTodo(props.id));
  };

  return (
    <div className="todo-del-duration">
      <button className="todo__icon-btn" onClick={handleDelete}>
        <img src={del} alt="icon"></img>
      </button>
      <span className="todo__completed-time">Completed in a day</span>
    </div>
  );
}

export default CompletedTask;
