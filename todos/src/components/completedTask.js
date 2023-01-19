import React from 'react'
import del from "../icons/delete.svg";
import "../styles/completedTask.css"

const CompletedTask = () => {
  return (
    <div className="todo-container">
      <div className="todo">
        <div className="todo-title-time">
          <div>
            <span class="todo-title-done">My Task 02</span>
          </div>
          <span class="todo-created-at">Created At: 16.01.23</span>
        </div>
        <div className="todo-del-duration">
          <button className="icon-btn">
            <img src={del} alt="icon"></img>
          </button>
          <span class="completed-time">Completed in a day</span>
        </div>
      </div>
    </div>
  );
}

export default CompletedTask