import React from 'react'
import del from "icons/delete.svg";
import done from "icons/done.svg";
import edit from "icons/edit.svg";

function IncompleteTask() {
  return (
    <div className="todo__done-edit-del">
      <button className="todo__icon-btn">
        <img src={done} alt="icon"></img>
      </button>
      <button className="todo__icon-btn">
        <img src={edit} alt="icon"></img>
        </button>
      <button className="todo__icon-btn">
        <img src={del} alt="icon"></img>
      </button>
    </div>
  )
}

export default IncompleteTask