import React from "react";
import "styles/task.css";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";

const Task = (props) => {
  return (
    <div className="todo__wrapper" key={props.myKey}>
      <div>
        <div>
          <span
            className={`todo__name ${
              props.isCompleted
                ? "todo__name--completed"
                : "todo__name--incomplete"
            }`}
          >
            {props.name}
          </span>
        </div>
        <span className="todo__date">Created At: {props.date}</span>
      </div>
      {props.isCompleted ? (
        <CompletedTask id={props.id} />
      ) : (
        <IncompleteTask id={props.id} />
      )}
    </div>
  );
};
export default Task;
