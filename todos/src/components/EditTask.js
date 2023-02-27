import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import "styles/addTask.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEditState,
  markCompletedOnEdit,
  updateTodo,
  selectedCardId,
} from "actions/index";
import spinner from "icons/spinner.svg";
import { infoMessage } from "toastMethods";
import { EDIT_CANCEL_MESSAGE } from "constants";

const EditTask = ({
  id,
  date,
  isCompleted,
  completedDate,
  onEdit,
  currentData,
}) => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const doneHandlerHelper = (data) => {
    dispatch(selectedCardId(id));
    if (data !== currentData) {
      dispatch(updateTodo(id, data, onEdit, true), setInputData(""));
    } else {
      dispatch(updateTodo(id, currentData, onEdit, false), setInputData(""));
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      doneHandlerHelper(inputData.slice(0, -1));
    }
  };
  const textAreaRef = useRef(null);

  useEffect(() => {
    setInputData(currentData);
    textAreaRef.current.focus();
  }, [currentData]);

  const currentDate = new Date().toLocaleDateString();

  const handleDone = () => {
    dispatch(selectedCardId(id));
    dispatch(markCompletedOnEdit(id, true, date, currentDate, onEdit));
  };
  const handleDelete = () => {
    dispatch(selectedCardId(id));
    dispatch(changeEditState(id, onEdit), setInputData(""));
    infoMessage(EDIT_CANCEL_MESSAGE);
  };
  const handleSave = () => {
    dispatch(selectedCardId(id));
    doneHandlerHelper(inputData);
  };

  const editCardLoadingState = useSelector(
    (state) => state.loadingReducers.editCardLoadingState
  );
  const currentSelectedId = useSelector(
    (state) => state.loadingReducers.currentSelectedId
  );

  return (
    <div
      className={`todo__wrapper ${
        currentSelectedId === id && editCardLoadingState && "todo--off"
      }`}
    >
      <div>
        {currentSelectedId === id && editCardLoadingState && (
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
            "addCardLoadingState" ? "Please wait..." : "Add new task..."
          }
          onKeyUp={handleKeyUp}
          ref={textAreaRef}
        ></textarea>
      </div>
      <div className="todo__save_done_del">
        <button className="btn btn__save_button" onClick={handleSave}>
          Save
        </button>
        <button className="todo__icon-btn" onClick={handleDone}>
          <img src={done} alt="icon"></img>
        </button>

        <button className="todo__icon-btn" onClick={handleDelete}>
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default EditTask;
