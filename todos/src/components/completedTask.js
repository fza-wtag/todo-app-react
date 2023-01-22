import React from "react";
import del from "../icons/delete.svg";
import "../styles/completedTask.css";

const CompletedTask = () => {
  return (
    <div className="todo">
      <div>
        <div>
          <span class="todo__name todo__name--completed">My Task 02</span>
        </div>
        <span class="todo__date">Created At: 16.01.23</span>
      </div>
      <div className="todo-del-duration">
        <button className="todo__icon-btn">
          <img src={del} alt="icon"></img>
        </button>
        <span class="todo__completed-time">Completed in a day</span>
      </div>
    </div>
  );
};

export default CompletedTask;
