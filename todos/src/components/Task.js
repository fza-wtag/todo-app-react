import React from "react";
import "styles/task.css";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";

const Task = (props) => {
  return (
    <div className="todo">
      <div>
        <div>
          <span
            className={`todo__name ${
              props.isCompleted
                ? "todo__name--completed"
                : "todo__name--incomple"
            }`}
          >
            {props.title}
          </span>
        </div>
        <span className="todo__date">Created At: {props.date}</span>
      </div>
      {props.isCompleted ? (
        <CompletedTask
          id={props.id}
          date={props.date}
          isCompleted={props.isCompleted}
          completedDate={props.completedDate}
        />
      ) : (
        <IncompleteTask
          id={props.id}
          date={props.date}
          isCompleted={props.isCompleted}
          completedDate={props.completedDate}
        />
      )}
    </div>
  );
};

export default Task;
