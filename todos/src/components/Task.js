import React from "react";
import "styles/task.css";
import { useSelector } from "react-redux";
import EditTask from "components/EditTask";
import ShowTask from "components/ShowTask";

const Task = (props) => {
  const myList = useSelector((state) => state.todoReducers.list).find(
    (task) => task.id === props.id
  );
  const currentData = myList.data;
  const onEdit = myList.onEdit;

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
  const isCurrentSelected = currentSelectedId === props.id;

  return (
    <div>
      {isLoading && isCurrentSelected ? (
          <ShowTask
            loading={true}
            id={props.id}
            date={props.date}
            title={props.title}
            isCompleted={props.isCompleted}
            completedDate={props.completedDate}
            onEdit={props.onEdit}
            currentData={currentData}
          />
      ) : onEdit ? (
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
          loading={false}
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
