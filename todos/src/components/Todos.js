import React, { useContext } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { TopContentContext } from "components/TopContent";
import { useSelector } from "react-redux";
import EmptyTaskList from "./EmptyTaskList";

function Todos() {
  const { isAddTaskVisible, setIsAddTaskVisible } =
    useContext(TopContentContext);
  const list = useSelector((state) => state.todoReducers.list);
  const isAddTaskVisible2 = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );

  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible2 ? <AddTask /> : null}
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
      {list.length === 0 && !isAddTaskVisible2 ? <EmptyTaskList /> : null}
    </div>
  );
}

export default Todos;
