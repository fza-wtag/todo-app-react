import React from "react";
import AddTask from "./addTask";
import IncompleteTask from "./incompleteTask";
import CompletedTask from "./completedTask";

function AllTodos() {
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
      <CompletedTask />
    </div>
  );
}

export default AllTodos;
