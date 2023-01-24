import React, { useContext } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { TopContentContext } from "components/TopContent";

function Todos() {
  const isAddTaskVisible = useContext(TopContentContext);
  
  return (
    <div className="all-todos">
      {isAddTaskVisible ? <AddTask /> : null}
      <Task name="My Task 1" date="22.01.23" isCompleted={false} />
      <Task name="My Task 2" date="22.01.23" isCompleted={true} />
      <Task name="My Task 3" date="22.01.23" isCompleted={true} />
      <Task name="My Task 4" date="22.01.23" isCompleted={false} />
      <Task name="My Task 5" date="22.01.23" isCompleted={true} />
      <Task name="My Task 6" date="22.01.23" isCompleted={true} />
      <Task name="My Task 7" date="22.01.23" isCompleted={true} />
      <Task name="My Task 8" date="22.01.23" isCompleted={false} />
      <Task name="My Task 9" date="22.01.23" isCompleted={false} />
      <Task name="My Task 10" date="23.01.23" isCompleted={false} />
      <Task name="My Task 11" date="23.01.23" isCompleted={true} />
    </div>
  );
}

export default Todos;
