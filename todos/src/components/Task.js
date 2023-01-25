import React from "react";
import "styles/task.css"
import IncompleteTask from "components/IncompleteTask"
import CompletedTask from "components/CompletedTask"

const Task = (props) => {
  return (
    <div className="todo" key= {props.myKey}>
      <div>
        <div>
          <span className={`todo__name ${props.isCompleted ? 'todo__name--completed' : 'todo__name--incomple'}`}>{props.name}</span>
        </div>
        <span className="todo__date">Created At: {props.date}</span>
      </div>
      { 
        props.isCompleted ? <CompletedTask /> : <IncompleteTask />
      }
    </div>
  );
};

export default Task;
