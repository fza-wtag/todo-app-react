import React from "react";
import AddTask from "./AddTask";
import IncompleteTask from "./IncompleteTask";
import CompletedTask from "./CompletedTask";
import "../styles/allTodos.css"

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
    </div>
  );
}

export default AllTodos;
