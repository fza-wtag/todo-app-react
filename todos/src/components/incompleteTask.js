import React from "react";
import del from "../icons/delete.svg";
import done from "../icons/done.svg";
import edit from "../icons/edit.svg";
import "../styles/incompleteTask.css";

const IncompleteTask = () => {
  return (
    <div className="todo">
      <div>
        <div>
          <span class="todo__name">My Task 01</span>
        </div>
        <span class="todo__date">Created At: 17.01.23</span>
      </div>
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
    </div>
  );
};

export default IncompleteTask;
