import React from "react";
import add from "icons/addOne.svg";
import "styles/emptyTaskList.css";
import { useSelector } from "react-redux";

function EmptyTaskList() {
  const loadingState = useSelector(
    (state) => state.loadingReducers.loadingState
  );

  return (
    <div className={`zero-task ${loadingState && "zero-task--disabled"}`}>
      <img src={add} alt="icon"></img>
      <div>
        <p className="zero-task__text">
          You didn't add any task. Please, add one.
        </p>
      </div>
    </div>
  );
}

export default EmptyTaskList;
