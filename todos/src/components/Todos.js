import React from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import "../styles/todos.css"

function Todos() {
  return (
    <div className="all-todos">
      <AddTask />
      <Task name="My Task 1" date="22.01.23" isCompleted={false} />
      <Task name="My Task 2" date="22.01.23" isCompleted={true} />
      <Task name="My Task 3" date="22.01.23" isCompleted={true} />
      <Task name="My Task 4" date="22.01.23" isCompleted={false} />
      <Task name="My Task 5" date="22.01.23" isCompleted={true} />
      <Task name="My Task 6" date="22.01.23" isCompleted={true} />
      <Task name="My Task 7" date="22.01.23" isCompleted={true} />
      <Task name="My Task 8" date="22.01.23" isCompleted={false} />
      <Task name="My Task 9" date="22.01.23" isCompleted={false} />
      <Task name="My Task 10" date="22.01.23" isCompleted={false} />
      <Task name="My Task 11" date="22.01.23" isCompleted={true} />
    </div>
  );
}

export default Todos;
