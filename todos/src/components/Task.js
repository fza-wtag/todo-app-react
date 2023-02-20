import React from "react";
import "styles/task.css";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";

const Task = ({key, id, title, isCompleted, date, completedDate}) => {

  const [day, month, year] = date.split("/");
  const formartedDate = `${day}.${month}.${year}`;

  return (
    <div className="todo__wrapper" key={props.myKey}>
      <div>
        <div>
          <span
            className={`todo__name ${
              isCompleted
                ? "todo__name--completed"
                : "todo__name--incomplete"
            }`}

          >
            {title}
          </span>
        </div>
        <span className="todo__date">Created At: {formartedDate}</span>
      </div>
      {isCompleted ? (
        <CompletedTask
          id={id}
          date={date}
          isCompleted={isCompleted}
          completedDate={completedDate}
        />
      ) : (
        <IncompleteTask
          id={id}
          date={date}
          isCompleted={isCompleted}
          completedDate={completedDate}
        />
      )}
    </div>
  );
};

export default Task;
