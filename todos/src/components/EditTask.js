import { useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import done from "icons/done.svg";
import "styles/addTask.css";
import { addTodo } from "actions/index";
import { useDispatch } from "react-redux";
import { deleteTodo, updateCompleted, editTodo } from "actions/index";

const EditTask = (props) => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      //to get the job done with enter button
      dispatch(addTodo(inputData), setInputData(""));
      if (inputData !== "") {
      }
    }
  };
  const textAreaRef = useRef(null);
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const doneHandleClick = () => {
    dispatch(updateCompleted(props.id, true, props.date, props.completedDate));
    console.log("done clicked");
  };
  const deleteHandleClick = () => {
    dispatch(deleteTodo(props.id));
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
        <button className="btn btn__save_button">Save</button>

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
