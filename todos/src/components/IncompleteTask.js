import React from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import edit from "icons/edit.svg";
import { useDispatch } from "react-redux";
import { deleteTodo, updateAsCompleted, changeEditState } from "actions/index";

function IncompleteTask(props) {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(
      updateAsCompleted(props.id, true, props.date, props.completedDate)
    );
  };
  const handleDelete = () => {
    dispatch(deleteTodo(props.id));
  };
  const editHandleClick = () => {
    dispatch(changeEditState(props.id, props.onEdit));
  };

  return (
    <div className="todo__done-edit-del">
      <button className="todo__icon-btn" onClick={handleDone}>
        <img src={done} alt="icon"></img>
      </button>
      <button className="todo__icon-btn" onClick={editHandleClick}>
        <img src={edit} alt="icon"></img>
      </button>
      <button className="todo__icon-btn" onClick={handleDelete}>
        <img src={del} alt="icon"></img>
      </button>
    </div>
  );
}

export default IncompleteTask;
