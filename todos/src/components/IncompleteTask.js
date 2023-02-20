import React from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import edit from "icons/edit.svg";
import { useDispatch } from "react-redux";
import { deleteTodo } from "actions/index";
import { updateCompleted } from "actions/index";

function IncompleteTask(props) {
  const dispatch = useDispatch();
  const handleDelete = (event) => {
    dispatch(deleteTodo(props.id));
  };

  const handleClick = () => {
    dispatch(updateCompleted(props.id, true, props.date, props.completedDate));
  };
  return (
    <div className="todo__done-edit-del">
      <button className="todo__icon-btn" onClick={handleClick}>
        <img src={done} alt="icon"></img>
      </button>
      <button className="todo__icon-btn">
        <img src={edit} alt="icon"></img>
      </button>
      <button className="todo__icon-btn" onClick={handleDelete}>
        <img src={del} alt="icon"></img>
      </button>
    </div>
  );
}

export default IncompleteTask;
