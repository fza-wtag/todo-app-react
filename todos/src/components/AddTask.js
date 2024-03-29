import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import "styles/addTask.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleAddTaskVisibility,
  toggleAddTaskButtonVisibility,
  setFilter,
  setIconVisibility,
  setSearchValue,
  updateCurrentPage,
} from "actions/index";
import { infoMessage, warningMessage, dangerMessage } from "toastMethods";
import {
  EMPTY_TITLE_MESSAGE,
  CREATE_CANCEL_MESSAGE,
  ALL,
  SHORT_TITLE_MESSAGE,
  LONG_TITLE_MESSAGE,
} from "constants";
import spinner from "icons/spinner.svg";
import classNames from "classnames";

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
  const userInputData = inputData.trim();
  const searchIconState = useSelector(
    (state) => state.searchReducers.iconState
  );

  const handleStateChange = () => {
    dispatch(toggleAddTaskButtonVisibility(!isCreateButtonDisabled));
    dispatch(toggleAddTaskVisibility(!isAddTaskVisible));
    dispatch(setFilter(ALL));
    dispatch(setIconVisibility(!searchIconState));
    dispatch(setSearchValue(""));
    dispatch(updateCurrentPage(1));
  };
  const currentDate = new Date().toLocaleDateString();

  const textAreaRef = useRef(null);
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const addTaskEventHelper = () => {
    if (userInputData.length === 0) {
      dangerMessage(EMPTY_TITLE_MESSAGE);
      setInputData(userInputData);
    } else if (userInputData.length < 3) {
      warningMessage(SHORT_TITLE_MESSAGE);
      setInputData(userInputData);
    } else if (userInputData.length > 2 && userInputData.length < 56) {
      dispatch(addTodo(userInputData, currentDate), setInputData(""));
      handleStateChange();
    } else {
      warningMessage(LONG_TITLE_MESSAGE);
      setInputData(userInputData);
    }
  };

  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      addTaskEventHelper();
    }
  };

  const handleAddTaskButtonClick = () => {
    addTaskEventHelper();
    textAreaRef.current.focus();
  };

  const handleDelButton = () => {
    handleStateChange();
    infoMessage(CREATE_CANCEL_MESSAGE);
  };

  const mainDivClassName = classNames("todo__wrapper", {
    "todo--off": addCardLoadingState,
  });

  const placeholderText = addCardLoadingState
    ? "Please wait..."
    : "Add new task.. [3-50 characters]";

  return (
    <div className={mainDivClassName} data-testid="add-task">
      <div>
        {addCardLoadingState && (
          <img
            className="spinner spinner--small"
            src={spinner}
            alt="loading.."
          ></img>
        )}
        <textarea
          data-testid="text-area"
          className="textarea__edit-text"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          placeholder={placeholderText}
          onKeyUp={handleKeyUp}
          ref={textAreaRef}
        ></textarea>
      </div>
      <div className="todo__add_del">
        <button
          className="btn btn__save_button"
          onClick={handleAddTaskButtonClick}
        >
          Add Task
        </button>
        <button
          className="todo__icon-btn"
          onClick={handleDelButton}
          data-testid="del-btn"
        >
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default AddTask;
