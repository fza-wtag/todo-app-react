import React from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import edit from "icons/edit.svg";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  markAsCompleted,
  changeEditState,
  selectedCardId,
} from "actions/index";
import classNames from "classnames";

function IncompleteTask({
  loading,
  id,
  date,
  isCompleted,
  completedDate,
  onEdit,
}) {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString();

  const handleDone = () => {
    dispatch(selectedCardId(id));
    dispatch(markAsCompleted(id, true, date, currentDate));
  };
  const handleDelete = () => {
    dispatch(selectedCardId(id));
    dispatch(deleteTodo(id));
  };
  const handleEdit = () => {
    dispatch(selectedCardId(id));
    dispatch(changeEditState(id, onEdit));
  };
  const mainDivClassname = classNames("todo__done-edit-del", {
    "todo__done-edit-del--off": loading,
  });

  return (
    <div className={mainDivClassname} data-testid="incomplete-task-component">
      <button
        className="todo__icon-btn"
        onClick={handleDone}
        data-testid="incom-done-btn"
      >
        <img src={done} alt="icon"></img>
      </button>
      <button
        className="todo__icon-btn"
        onClick={handleEdit}
        data-testid="incom-edit-btn"
      >
        <img src={edit} alt="icon"></img>
      </button>
      <button
        className="todo__icon-btn"
        onClick={handleDelete}
        data-testid="incom-delete-btn"
      >
        <img src={del} alt="icon"></img>
      </button>
    </div>
  );
}

export default IncompleteTask;
