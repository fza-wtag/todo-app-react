import React from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import edit from "icons/edit.svg";
import { useDispatch} from "react-redux";
import {
  deleteTodo,
  updateCompleted,
  editTodo,
  selectedCardId,
} from "actions/index";

function IncompleteTask(props) {
  const dispatch = useDispatch();

  const doneHandleClick = () => {
    dispatch(selectedCardId(props.id));
    dispatch(updateCompleted(props.id, true, props.date, props.completedDate));
    
  };
  const deleteHandleClick = () => {
    dispatch(selectedCardId(props.id));
    dispatch(deleteTodo(props.id));
    
  };
  const editHandleClick = () => {
    dispatch(editTodo(props.id, props.onEdit));
  };

  return (
    <div className="todo__done-edit-del">
      <button className="todo__icon-btn" onClick={doneHandleClick}>
        <img src={done} alt="icon"></img>
      </button>
      <button className="todo__icon-btn" onClick={editHandleClick}>
        <img src={edit} alt="icon"></img>
      </button>
      <button className="todo__icon-btn" onClick={deleteHandleClick}>
        <img src={del} alt="icon"></img>
      </button>
    </div>
  );
}

export default IncompleteTask;
