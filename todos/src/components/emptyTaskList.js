import React from "react";
import add from "../icons/addOne.svg";

function EmptyTaskList() {
  return (
    <div className="no-tasks">
      <img src={add} alt="icon"></img>
      <div>
        <p class="no-task-text">You didn't add any task. Please, add one.</p>
      </div>
    </div>
  );
}

export default EmptyTaskList;
