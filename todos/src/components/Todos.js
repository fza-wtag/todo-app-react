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
  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible ? <AddTask /> : null}
        {list
          .map((elem) => {
            return elem.data ? (
              <Task
                myKey={elem.id}
                name={elem.data}
                date={elem.date}
                isCompleted={elem.isCompleted}
              />
            ) : null;
          })}
      </div>
      {list.length === 0 && !isAddTaskVisible ? <EmptyTaskList /> : null}
    </div>
  );
}

export default Todos;
