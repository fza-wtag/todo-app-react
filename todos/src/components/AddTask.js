import { useContext } from "react";
import del from "icons/delete.svg";
import "styles/addTask.css";
import { TopContentContext } from "components/TopContent";

const AddTask = () => {
  const { isAddTaskVisible, setIsAddTaskVisible } =
    useContext(TopContentContext);

  return (
    <div className="todo">
      <div>
        <textarea
          className="textarea__edit-text"
          placeholder="Add new task..."
        ></textarea>
      </div>
      <div className="todo__add_del">
        <button className="btn btn__save_button">Add Task</button>
        <button
          className="todo__icon-btn"
          onClick={() => setIsAddTaskVisible(!isAddTaskVisible)}
        >
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default AddTask;
