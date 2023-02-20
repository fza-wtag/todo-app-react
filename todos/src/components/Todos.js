import { React } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { useSelector } from "react-redux";
import EmptyTaskList from "components/EmptyTaskList";
import LoadMoreBtn from "components/LoadMoreBtn";
import { LOAD_MORE, SHOW_LESS, PER_PAGE } from "constants";
import { ALL, INCOMPLETE } from "constants";

function Todos() {
  const list = useSelector((state) => state.todoReducers.list);
  const filter = useSelector((state) => state.filterReducer.filter);
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );
  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );

  let filteredTodos;
  if (filter === ALL) {
    filteredTodos = list;
  } else if (filter === INCOMPLETE) {
    filteredTodos = list.filter((todo) => !todo.isCompleted);
  } else {
    filteredTodos = list.filter((todo) => todo.isCompleted);
  }

  const displayedTodoList = filteredTodos.slice(0, PER_PAGE * currentPage);
  
  const showEmptyListIcon = list.length === 0 && !isAddTaskVisible;
  const lessThanListLength = currentPage * PER_PAGE < filteredTodos.length;
  const listGreaterThanPerPage = filteredTodos.length > PER_PAGE;

  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible && <AddTask />}
        {displayedTodoList.map((elem) => {
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
      {showEmptyListIcon && <EmptyTaskList />}
      {lessThanListLength ? (
        <LoadMoreBtn type={LOAD_MORE} />
      ) : (
        listGreaterThanPerPage && <LoadMoreBtn type={SHOW_LESS} />
      )}
    </div>
  );
}

export default Todos;
