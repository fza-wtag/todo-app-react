import React from "react";
import add from "../icons/addOne.svg";
import "../styles/emptyTaskList.css";

function EmptyTaskList() {
  return (
    <div className="zero-tasks">
      <img src={add} alt="icon"></img>
      <div>
        <p className="zero-task__text">You didn't add any task. Please, add one.</p>
      </div>
    </div>
  );
}

export default EmptyTaskList;
