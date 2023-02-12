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
import { infoMessage, successMessage, warningMessage } from "toast_methods";
import { TASK_ADDED_MESSAGE } from "constants";
import { EMPTY_TITLE_MESSAGE } from "constants";
import { CREATE_CANCEL_MESSAGE } from "constants";

const AddTask = () => {
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );

  const isCreateButtonDisabled = useSelector(
    (state) => state.toggleReducers.isCreateButtonDisabled
  );

  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleSateChange = () => {
    dispatch(toggleAddTaskButtonVisibility(!isCreateButtonDisabled));
    dispatch(toggleAddTaskVisibility(!isAddTaskVisible));
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      //to get the job done with enter button
      dispatch(addTodo(inputData.slice(0, -1)), setInputData(""));
      if (inputData !== "") {
        successMessage(TASK_ADDED_MESSAGE);
        handleSateChange();
      }
    }
  };
  const textAreaRef = useRef(null);
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const handleAddTaskButtonClick = () => {
    if (inputData !== "") {
      handleSateChange();
      successMessage(TASK_ADDED_MESSAGE);
      dispatch(addTodo(inputData), setInputData(""));
    } else {
      warningMessage(EMPTY_TITLE_MESSAGE);
    }
  };
  const handleDelButton = () => {
    handleSateChange();
    infoMessage(CREATE_CANCEL_MESSAGE);
  };

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
          onClick={handleAddTaskButtonClick}
        >
          AddTask
        </button>
        <button className="todo__icon-btn" onClick={handleDelButton}>
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default AddTask;
