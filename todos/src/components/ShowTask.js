import React from "react";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";
import classNames from "classnames";

function ShowTask({
  id,
  date,
  title,
  isCompleted,
  completedDate,
  onEdit,
  currentData,
}) {
  const [day, month, year] = date.split("/");
  const formatedDate = `${day}.${month}.${year}`;

  const spanClassName = classNames("todo__name", {
    "todo__name--completed": isCompleted,
    "todo__name--incomple": !isCompleted,
  });
  
  return (
    <div className="todo__wrapper">
      <div>
        <div>
          <span className={spanClassName}>{title}</span>
        </div>
        <span className="todo__date">Created At: {formatedDate} </span>
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
          onEdit={onEdit}
        />
      )}
    </div>
  );
}

export default ShowTask;
