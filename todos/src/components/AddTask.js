import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import "styles/addTask.css";
import { addTodo } from "actions/index";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAddTaskVisibility,
  toggleAddTaskButtonVisibility,
} from "actions/index";
import { infoMessage, successMessage, warningMessage } from "toastMethods";
import {
  ADD_TASK_MESSAGE,
  EMPTY_TITLE_MESSAGE,
  CREATE_CANCEL_MESSAGE,
} from "constants";
import spinner from "icons/spinner.svg";

const AddTask = () => {
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );

  const isCreateButtonDisabled = useSelector(
    (state) => state.toggleReducers.isCreateButtonDisabled
  );

  const addCardLoadingState = useSelector(
    (state) => state.loadingReducers.addCardLoadingState
  );

  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleStateChange = () => {
    dispatch(toggleAddTaskButtonVisibility(!isCreateButtonDisabled));
    dispatch(toggleAddTaskVisibility(!isAddTaskVisible));
  };

  const currentDate = new Date().toLocaleDateString();
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      //to get the job done with enter button
      if (inputData !== "") {
        dispatch(
          addTodo(inputData.slice(0, -1), currentDate),
          setInputData("")
        );
        handleStateChange();
      }
    }
  };
  const textAreaRef = useRef(null);
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const handleAddTaskButtonClick = () => {
    if (inputData !== "") {
      dispatch(addTodo(inputData, currentDate), setInputData(""));
      handleStateChange();
    } else {
      warningMessage(EMPTY_TITLE_MESSAGE);
    }
  };
  const handleDelButton = () => {
    handleStateChange();
    infoMessage(CREATE_CANCEL_MESSAGE);
  };

  return (
    <div className={`todo__wrapper ${addCardLoadingState && "todo--off"}`}>
      <div>
        {addCardLoadingState && (
          <img
            className="spinner spinner--small"
            src={spinner}
            alt="loading.."
          ></img>
        )}
        <textarea
          className="textarea__edit-text"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          placeholder={
            addCardLoadingState ? "Please wait..." : "Add new task..."
          }
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
