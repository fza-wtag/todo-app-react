import React from "react";
import "styles/task.css";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";
import classNames from "classnames";
const Task = (props) => {
  return (
    <div className="todo__wrapper" key={props.myKey}>
      <div>
        <div>
          <span
            className={classNames("todo__name", {
              "todo__name--completed": props.isCompleted,
              "todo__name--incomple": !props.isCompleted,
            })}
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
