import React from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { useSelector } from "react-redux";
import EmptyTaskList from "./EmptyTaskList";

function Todos() {
  const list = useSelector((state) => state.todoReducers.list);
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );
  console.log(isAddTaskVisible);
  console.log(list);

  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible ? <AddTask /> : null}
        {list.map((elem) => {
          return elem.data ? (
            <Task
              key={elem.id}
              id={elem.id}
              title={elem.data}
              isCompleted={elem.isCompleted}
              date={elem.date}
              completedDate={elem.completedDate}
            />
          ) : null;
        })}
      </div>
      {list.length === 0 && !isAddTaskVisible ? <EmptyTaskList /> : null}
    </div>
  );
}

export default Todos;
