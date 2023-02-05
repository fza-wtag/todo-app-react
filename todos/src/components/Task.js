import React from "react";
import "styles/task.css";
import { useSelector } from "react-redux";
import EditTask from "./EditTask";
import ShowTask from "./ShowTask";

const Task = (props) => {
  const myList = useSelector((state) => state.todoReducers.list).find(
    (task) => task.id === props.id
  );
  const currentData = myList.data;
  const onEdit = myList.onEdit;

  return (
    <div>
      {onEdit ? (
        <EditTask
          id={props.id}
          date={props.date}
          isCompleted={props.isCompleted}
          completedDate={props.completedDate}
          onEdit={props.onEdit}
          currentData={currentData}
        />
      ) : (
        <ShowTask
          id={props.id}
          date={props.date}
          title={props.title}
          isCompleted={props.isCompleted}
          completedDate={props.completedDate}
          onEdit={props.onEdit}
          currentData={currentData}
        />
      )}
    </div>
  );
};

export default Task;
