import React from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import edit from "icons/edit.svg";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsCompleted, changeEditState } from "actions/index";
import { dangerMessage, successMessage } from "toastMethods";
import { TASK_DELETE_MESSAGE, CREATE_SUCCESS_MESSAGE } from "constants";

function IncompleteTask(props) {
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    dispatch(deleteTodo(props.id));
    dangerMessage(TASK_DELETE_MESSAGE);
  };

  const handleDone = () => {
    dispatch(markAsCompleted(props.id, true, props.date, props.completedDate));
    successMessage(CREATE_SUCCESS_MESSAGE);
  };

  const handleEdit = () => {
    dispatch(changeEditState(props.id, props.onEdit));
  };

  return (
    <div className="todo__done-edit-del">
      <button className="todo__icon-btn" onClick={handleDone}>
        <img src={done} alt="icon"></img>
      </button>
      <button className="todo__icon-btn" onClick={handleEdit}>
        <img src={edit} alt="icon"></img>
      </button>
      <button className="todo__icon-btn" onClick={handleDelete}>
        <img src={del} alt="icon"></img>
      </button>
    </div>
  );
}

export default IncompleteTask;
