import React, { useContext } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { TopContentContext } from "components/TopContent";
import { useSelector } from "react-redux";

function Todos() {
  const { isAddTaskVisible, setIsAddTaskVisible } =
    useContext(TopContentContext);
  const list = useSelector((state) => state.todoReducers.list);
  return (
    <div className="all-todos">
      {isAddTaskVisible ? <AddTask /> : null}
      {list
        .slice()
        .reverse()
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
  );
}

export default Todos;
