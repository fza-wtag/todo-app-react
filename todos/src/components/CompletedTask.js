import React from 'react'
import del from "icons/delete.svg";

function CompletedTask() {
  return (
    <div className="todo-del-duration">
      <button className="todo__icon-btn">
        <img src={del} alt="icon"></img>
      </button>
        <span className="todo__completed-time">Completed in a day</span>
      </div>
  )
}

export default CompletedTask