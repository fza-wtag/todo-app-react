import { React } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { useSelector } from "react-redux";
import EmptyTaskList from "components/EmptyTaskList";
import PaginatorButton from "components/PaginatorButton";
import { LOAD_MORE, SHOW_LESS, PER_PAGE, ALL, INCOMPLETE } from "constants";
import spinner from "icons/spinner.svg";

function Todos() {
  const list = useSelector((state) => state.todoReducers.list);
  const filter = useSelector((state) => state.filterReducer.filter);
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );
  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );

  const searchValue = useSelector((state) => state.searchReducer.searchValue);

  let filteredTodos;
  if (filter === ALL) {
    filteredTodos = list;
  } else if (filter === INCOMPLETE) {
    filteredTodos = list.filter((todo) => !todo.isCompleted);
  } else {
    filteredTodos = list.filter((todo) => todo.isCompleted);
  }
  const searchedTodos = filteredTodos.filter((elem) =>
    elem.data.toLowerCase().includes(searchValue.toLowerCase())
  );
  const displayedTodoList = searchedTodos.slice(0, PER_PAGE * currentPage);
  const loadingState = useSelector(
    (state) => state.loadingReducer.loadingState
  );

  const showEmptyListIcon = displayedTodoList.length === 0 && !isAddTaskVisible;

  let showLoadMore;
  let showShowLess;

  if (searchValue.length === 0) {
    showLoadMore = currentPage * PER_PAGE < filteredTodos.length;
    showShowLess = filteredTodos.length > PER_PAGE;
  } else {
    showLoadMore = currentPage * PER_PAGE < searchedTodos.length;
    showShowLess = searchedTodos.length > PER_PAGE;
  }

  return (
    <div>
      <div className={`all-todos ${loadingState && "all-todos--off"}`}>
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
      {loadingState && (
        <img className="spinner" src={spinner} alt="Loading.."></img>
      )}
      {showEmptyListIcon && <EmptyTaskList />}
      {!loadingState && showLoadMore && <PaginatorButton type={LOAD_MORE} />}
      {!loadingState && !showLoadMore && showShowLess && (
        <PaginatorButton type={SHOW_LESS} />
      )}
    </div>
  );
}

export default Todos;
