import del from "../icons/delete.svg";
import "../styles/addTask.css";

const AddTask = () => {
  return (
    <div className="todo">
      <div>
        <textarea
          className="textarea__edit-text"
          name=""
          id=""
          placeholder="Add new task..."
        ></textarea>
      </div>
      <div className="todo__add_del">
        <button className="btn btn__save_button">Add Task</button>
        <button className="icon-btn">
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default AddTask;
