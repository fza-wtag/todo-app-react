import { React } from "react";
import AddTask from "components/AddTask";
import Task from "components/Task";
import "styles/todos.css";
import { useSelector } from "react-redux";
import EmptyTaskList from "components/EmptyTaskList";
import LoadMoreBtn from "./LoadMoreBtn";

function Todos() {
  const list = useSelector((state) => state.todoReducers.list);
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );
  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );
  const displayedTodoList = list.slice(0, 4 * currentPage);
  console.log(list.length);

  return (
    <div>
      <div className="all-todos">
        {isAddTaskVisible && <AddTask />}
        {displayedTodoList.map((elem) => {
          return (
            elem.data && (
              <Task
                key={elem.id}
                id={elem.id}
                title={elem.data}
                isCompleted={elem.isCompleted}
                date={elem.date}
                completedDate={elem.completedDate}
                onEdit={elem.onEdit}
              />
            )
          );
        })}
      </div>
      {list.length === 0 && !isAddTaskVisible && <EmptyTaskList />}
      {currentPage * 4 < list.length ? (
        <LoadMoreBtn type={"Load More"} />
      ) : (
        list.length > 4 && <LoadMoreBtn type={"Show Less"} />
      )}
    </div>
  );
}

export default Todos;
