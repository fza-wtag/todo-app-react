import React from "react";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";
import spinner from "icons/spinner.svg";

function ShowTask(props) {
  const [day, month, year] = props.date.split("/");
  const date = `${day}.${month}.${year}`;

  return (
    <div className="todo">
      {props.loading && (
        <img
          className="spinner spinner--small"
          src={spinner}
          alt="loading.."
        ></img>
      )}
      <div className={`${props.loading && "todo--off"}`}>
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
          loading={props.loading}
          id={props.id}
          date={props.date}
          isCompleted={props.isCompleted}
          completedDate={props.completedDate}
        />
      ) : (
        <IncompleteTask
          loading={props.loading}
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
