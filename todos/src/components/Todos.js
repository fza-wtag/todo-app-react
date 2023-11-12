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

  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible && <AddTask />}
        {list.map(
          (element) =>
            element.data && (
              <Task
                key={element.id}
                id={element.id}
                title={element.data}
                isCompleted={element.isCompleted}
                date={element.date}
                completedDate={element.completedDate}
              />
            )
        )}
      </div>
      {list.length === 0 && !isAddTaskVisible && <EmptyTaskList />}
    </div>
  );
}

export default Todos;
