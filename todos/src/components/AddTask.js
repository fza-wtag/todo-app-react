import { useContext, useState } from "react";
import del from "icons/delete.svg";
import "styles/addTask.css";
import { TopContentContext } from "components/TopContent";
import { addTodo } from "actions/index";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const { isAddTaskVisible, setIsAddTaskVisible } =
    useContext(TopContentContext);
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <div>
        <textarea
          className="textarea__edit-text"
          placeholder="Add new task..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        ></textarea>
      </div>
      <div className="todo__add_del">
        <button
          className="btn btn__save_button"
          onClick={() => dispatch(addTodo(inputData), setInputData(""))}
        >
          Add Task
        </button>
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
