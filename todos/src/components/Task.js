import React from "react";
import "styles/task.css";
import { useSelector } from "react-redux";
import EditTask from "components/EditTask";
import ShowTask from "components/ShowTask";

const Task = ({ key, id, title, isCompleted, date, completedDate, onEdit }) => {
  const myList = useSelector((state) => state.todoReducers.list).find(
    (task) => task.id === id
  );
  const currentData = myList.data;
  const currentOnEdit = myList.onEdit;

  const completedCardLoadingState = useSelector(
    (state) => state.loadingReducers.completedCardLoadingState
  );

  const deleteCardLoadingState = useSelector(
    (state) => state.loadingReducers.deleteCardLoadingState
  );

  const currentSelectedId = useSelector(
    (state) => state.loadingReducers.currentSelectedId
  );

  const isLoading = completedCardLoadingState || deleteCardLoadingState;
  const isCurrentSelected = currentSelectedId === id;

  return (
    <div>
      {isLoading && isCurrentSelected ? (
        <ShowTask
          loading={true}
          id={id}
          date={date}
          title={title}
          isCompleted={isCompleted}
          completedDate={completedDate}
          onEdit={onEdit}
          currentData={currentData}
        />
      ) : currentOnEdit ? (
        <EditTask
          id={id}
          date={date}
          isCompleted={isCompleted}
          completedDate={completedDate}
          onEdit={onEdit}
          currentData={currentData}
        />
      ) : (
        <ShowTask
          loading={false}
          id={id}
          date={date}
          title={title}
          isCompleted={isCompleted}
          completedDate={completedDate}
          onEdit={onEdit}
          currentData={currentData}
        />
      )}
    </div>
  );
};

export default Task;
