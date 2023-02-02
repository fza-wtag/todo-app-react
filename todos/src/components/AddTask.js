import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import "styles/addTask.css";
import { addTodo } from "actions/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  toggleAddTaskVisibility,
  toggleAddTaskButtonVisibility,
} from "actions/index";

const AddTask = () => {
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );

  const isCreateButtonDisabled = useSelector(
    (state) => state.toggleReducers.isCreateButtonDisabled
  );

  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleAddTaskButtonVisibility(!isCreateButtonDisabled));
    dispatch(toggleAddTaskVisibility(!isAddTaskVisible));
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      //to get the job done with enter button
      dispatch(addTodo(inputData), setInputData(""));
      if (inputData !== "") {
        handleClick();
      }
    }
  };
  const textAreaRef = useRef(null);
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  return (
    <div className="todo">
      <div>
        <textarea
          className="textarea__edit-text"
          placeholder="Add new task..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          onKeyUp={handleKeyUp}
          ref={textAreaRef}
        ></textarea>
      </div>
      <div className="todo__add_del">
        <button
          className="btn btn__save_button"
          onClick={(event) => {
            dispatch(addTodo(inputData), setInputData(""));
            if (inputData !== "") {
              handleClick();
            }
          }}
        >
          Add Task
        </button>
        <button className="todo__icon-btn" onClick={handleClick}>
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default AddTask;
