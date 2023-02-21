import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import "styles/addTask.css";
import { useDispatch } from "react-redux";
import { markCompletedOnEdit, updatedTodo } from "actions/index";

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
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      dispatch(updatedTodo(id, inputData, onEdit), setInputData(""));
    }
  };
  const textAreaRef = useRef(null);

  useEffect(() => {
    setInputData(currentData);
    textAreaRef.current.focus();
  }, [currentData]);

  const handleDone = () => {
    dispatch(markCompletedOnEdit(id, true, date, completedDate, onEdit));
  };
  const handleDelete = () => {
    dispatch(updatedTodo(id, currentData, onEdit), setInputData(""));
  };
  const handleSave = () => {
    dispatch(updatedTodo(id, inputData, onEdit), setInputData(""));
  };

  return (
    <div className="todo__wrapper">
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
