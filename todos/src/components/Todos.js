import { React } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { useSelector } from "react-redux";
import EmptyTaskList from "components/EmptyTaskList";
import LoadMoreBtn from "components/LoadMoreBtn";
import { PER_PAGE } from "constants";

function Todos() {
  const list = useSelector((state) => state.todoReducers.list);
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );
  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );
  const displayedTodoList = list.slice(0, PER_PAGE * currentPage);
  const showEmptyListIcon = list.length === 0 && !isAddTaskVisible;

  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible && <AddTask />}
        {displayedTodoList.map((elem) => {
          return (
            <Task
              key={elem.id}
              id={elem.id}
              title={elem.data}
              isCompleted={elem.isCompleted}
              date={elem.date}
              completedDate={elem.completedDate}
              onEdit={elem.onEdit}
            />
          );
        })}
      </div>
      {showEmptyListIcon && <EmptyTaskList />}
      {currentPage * PER_PAGE < list.length ? (
        <LoadMoreBtn type={"Load More"} />
      ) : (
        list.length > PER_PAGE && <LoadMoreBtn type={"Show Less"} />
      )}
    </div>
  );
}

export default Todos;
