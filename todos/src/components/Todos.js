import { React } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { useSelector } from "react-redux";
import EmptyTaskList from "components/EmptyTaskList";
import LoadMoreBtn from "components/LoadMoreBtn";
import { LOAD_MORE, SHOW_LESS, PER_PAGE } from "constants";
import spinner from "icons/spinner.svg";
import { getCurrentTodos } from "supabaseData";

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

  const filteredTodos =
    filter === "all"
      ? list
      : filter === "incomplete"
      ? list.filter((todo) => !todo.isCompleted)
      : list.filter((todo) => todo.isCompleted);
  const searchedTodos = filteredTodos.filter((elem) =>
    elem.data.toLowerCase().includes(searchValue.toLowerCase())
  );
  const displayedTodoList = searchedTodos.slice(0, PER_PAGE * currentPage);
  const loadingState = useSelector(
    (state) => state.laodingReducer.loadingState
  );

  const showEmptyListIcon = displayedTodoList.length === 0 && !isAddTaskVisible;
  const lessThanfilteredTodos = currentPage * PER_PAGE < filteredTodos.length;
  const lessThansearchedTodos = currentPage * PER_PAGE < searchedTodos.length;

  const cardLoadingState = useSelector(
    (state) => state.laodingReducer.cardLoadingState
  );

  getCurrentTodos();

  return (
    <div>
      <div className={`all-todos ${loadingState && "all-todos--off"}`}>
        {(isAddTaskVisible || cardLoadingState) && <AddTask />}
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
        <img className="spinner" src={spinner} alt="Loging"></img>
      )}
      {showEmptyListIcon && <EmptyTaskList />}
      {searchValue.length === 0 ? (
        lessThanfilteredTodos ? (
          <LoadMoreBtn type={LOAD_MORE} />
        ) : (
          filteredTodos.length > PER_PAGE && <LoadMoreBtn type={SHOW_LESS} />
        )
      ) : lessThansearchedTodos ? (
        <LoadMoreBtn type={LOAD_MORE} />
      ) : (
        searchedTodos.length > PER_PAGE && <LoadMoreBtn type={SHOW_LESS} />
      )}
    </div>
  );
}

export default Todos;
