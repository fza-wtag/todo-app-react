import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import "styles/addTask.css";
import { useDispatch } from "react-redux";
import { deleteTodo, editUpdateCompleted, updateTodo } from "actions/index";

const EditTask = (props) => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      dispatch(updateTodo(props.id, inputData, props.onEdit), setInputData(""));
    }
  };
  const textAreaRef = useRef(null);

  useEffect(() => {
    setInputData(props.currentData);
    textAreaRef.current.focus();
  }, [props.currentData]);

  const doneHandleClick = () => {
    dispatch(
      editUpdateCompleted(
        props.id,
        true,
        props.date,
        props.completedDate,
        props.onEdit
      )
    );
    console.log("done clicked");
  };
  const deleteHandleClick = () => {
    dispatch(deleteTodo(props.id));
  };
  const saveHandleClick = () => {
    dispatch(updateTodo(props.id, inputData, props.onEdit), setInputData(""));
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
      <div className="todo__save_done_del">
        <button className="btn btn__save_button" onClick={saveHandleClick}>
          Save
        </button>

        <button className="todo__icon-btn" onClick={doneHandleClick}>
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
