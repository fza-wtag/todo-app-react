import React from "react";
import AddTask from "./AddTask";
import IncompleteTask from "./IncompleteTask";
import CompletedTask from "./CompletedTask";
import "../styles/todos.css"

function Todos() {
  return (
    <div className="all-todos">
      <AddTask />
      <IncompleteTask />
      <CompletedTask />
      <IncompleteTask />
      <CompletedTask />
      <IncompleteTask />
      <CompletedTask />
      <IncompleteTask />
      <CompletedTask />
      <CompletedTask />
      <IncompleteTask />
      <CompletedTask />
    </div>
  );
}

export default Todos;
