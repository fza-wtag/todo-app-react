import React from "react";
import del from "../icons/delete.svg";
import done from "../icons/done.svg";
import edit from "../icons/edit.svg";
import "../styles/task.css"

const Task = (props) => {
  let taskNameClass = "todo__name";
  let bottomPart = null;

  if (props.isCompleted) {
    taskNameClass = "todo__name todo__name--completed";
    bottomPart = (
      <div className="todo-del-duration">
        <button className="todo__icon-btn">
          <img src={del} alt="icon"></img>
        </button>
        <span class="todo__completed-time">Completed in a day</span>
      </div>
    );
  } else {
    taskNameClass = "todo__name todo__name--incomple";
    bottomPart = (
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
    );
  }

  return (
    <div className="todo">
      <div>
        <div>
          <span className={taskNameClass}>{props.name}</span>
        </div>
        <span className="todo__date">Created At: {props.date}</span>
      </div>
      {bottomPart}
    </div>
  );
};

export default Task;
