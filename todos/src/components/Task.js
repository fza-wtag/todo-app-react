import React from "react";
import del from "../icons/delete.svg";
import done from "../icons/done.svg";
import edit from "../icons/edit.svg";
import "../styles/task.css"

const Task = (props) => {
  return (
    <div className="todo">
      <div>
        <div>
          <span className={`todo__name ${props.isCompleted ? 'todo__name--completed' : 'todo__name--incomple'}`}>{props.name}</span>
        </div>
        <span className="todo__date">Created At: {props.date}</span>
      </div>
      { props.isCompleted ? 
        <div className="todo-del-duration">
          <button className="todo__icon-btn">
            <img src={del} alt="icon"></img>
          </button>
          <span className="todo__completed-time">Completed in a day</span>
        </div>
        :
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
      }
    </div>
  );
};

export default Task;
