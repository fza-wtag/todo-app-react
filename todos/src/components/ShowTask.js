import React from "react";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";

function ShowTask(props) {
  const [day, month, year] = props.date.split("/");
  const date = `${day}.${month}.${year}`;

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
        <span className="todo__date">Created At: {date} </span>
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
          onEdit={props.onEdit}
        />
      )}
    </div>
  );
}

export default ShowTask;
