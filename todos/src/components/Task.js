import React from "react";
import "styles/task.css";
import IncompleteTask from "components/IncompleteTask";
import CompletedTask from "components/CompletedTask";
import { useDispatch, useSelector } from "react-redux";
import EditTask from "./EditTask";
import AddTask from "./AddTask";

const Task = (props) => {
  //formating the dates as dd.mm.yy
  const [day, month, year] = props.date.split("/");
  const date = `${day}.${month}.${year}`;

  const myList = useSelector((state) => state.todoReducers.list).find(
    (task) => task.id === props.id
  );
  const onEdit = myList.onEdit;
  console.log(onEdit);
  

  return (
    <div>
      {onEdit ? (
        <EditTask />
      ) : (
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
            <span className="todo__date">Created At: {date}</span>
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
      )}
    </div>
  );
};

export default Task;
