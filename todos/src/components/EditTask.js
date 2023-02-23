import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import "styles/addTask.css";
import { useDispatch } from "react-redux";
import {
  editTodo,
  editUpdateCompleted,
  updateTodo,
  selectedCardId,
} from "actions/index";
import { infoMessage } from "toastMethods";
import { EDIT_CANCEL_MESSAGE } from "constants";
import { useSelector } from "react-redux";
import spinner from "icons/spinner.svg";

const EditTask = (props) => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const doneHandlerHelper = (data) => {
    dispatch(selectedCardId(props.id));
    if (data !== props.currentData) {
      dispatch(
        updateTodo(props.id, data, props.onEdit, true),
        setInputData("")
      );
    } else {
      dispatch(
        updateTodo(props.id, props.currentData, props.onEdit, false),
        setInputData("")
      );
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      doneHandlerHelper(inputData.slice(0, -1));
    }
  };
  const textAreaRef = useRef(null);

  useEffect(() => {
    setInputData(props.currentData);
    textAreaRef.current.focus();
  }, [props.currentData]);

  const currentDate = new Date().toLocaleDateString();

  const handleDone = () => {
    dispatch(selectedCardId(props.id));
    dispatch(
      editUpdateCompleted(props.id, true, props.date, currentDate, props.onEdit)
    );
  };
  const deleteHandleClick = () => {
    dispatch(selectedCardId(props.id));
    dispatch(editTodo(props.id, props.onEdit), setInputData(""));
    infoMessage(EDIT_CANCEL_MESSAGE);
  };
  const handleSave = () => {
    dispatch(selectedCardId(props.id));
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
      className={`todo ${
        currentSelectedId === props.id && editCardLoadingState && "todo--off"
      }`}
    >
      <div>
        {currentSelectedId === props.id && editCardLoadingState && (
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
        <button className="todo__icon-btn" onClick={deleteHandleClick}>
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default EditTask;
