import React from "react";
import del from "../icons/delete.svg";
import done from "../icons/done.svg";
import edit from "../icons/edit.svg";
import "../styles/incompleteTask.css"

const IncompleteTask = () => {
  return (
    <div className="todo-container">
      <div className="todo">
        <div className="todo-title-time">
          <div>
            <span class="todo-title">My Task 01</span>
          </div>
          <span class="todo-created-at">Created At: 17.01.23</span>
        </div>
        <div className="todo-done-edit-del">
          <button className="icon-btn">
            <img src={done} alt="icon"></img>
          </button>
          <button className="icon-btn">
            <img src={edit} alt="icon"></img>
          </button>
          <button className="icon-btn">
            <img src={del} alt="icon"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncompleteTask;
