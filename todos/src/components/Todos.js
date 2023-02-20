import React from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { useSelector } from "react-redux";
import EmptyTaskList from "components/EmptyTaskList";

function Todos() {
  const list = useSelector((state) => state.todoReducers.list);
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );

  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible && <AddTask/>}
        {list.map((elem) => {
          return elem.data ? (
            <Task
              key={elem.id}
              id={elem.id}
              title={elem.data}
              isCompleted={elem.isCompleted}
              date={elem.date}
              completedDate={elem.completedDate}
              onEdit={elem.onEdit}
            />
          ) : null;
        })}
      </div>
      {list.length === 0 && !isAddTaskVisible && <EmptyTaskList />}
    </div>
  );
}

export default Todos;
