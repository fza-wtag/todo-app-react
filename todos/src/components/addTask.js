import del from "../icons/delete.svg";
import "../styles/addTask.css"

const AddTask = () => {
  return (
    <div className="todo-container">
      <div className="todo">
        <div className="text-area">
          <textarea
            className="edit-text"
            name="'"
            id=""
            placeholder="Add new task..."
          ></textarea>
        </div>
        <div className="todo_add_del">
          <button className="add-task">Add Task</button>
          <button className="icon-btn">
            <img src={del} alt="icon"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
