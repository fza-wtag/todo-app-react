import { useContext, useState, useRef, useEffect } from "react";
import del from "icons/delete.svg";
import "styles/addTask.css";
import { TopContentContext } from "components/TopContent";
import { addTodo} from "actions/index";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const {
    isAddTaskVisible,
    setIsAddTaskVisible,
    isBtnDisabled,
    setIsBtnDisabled,
  } = useContext(TopContentContext);

  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const addTaskBtnClick = () => {
    setIsAddTaskVisible(!isAddTaskVisible);
    setIsBtnDisabled(!isBtnDisabled);
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      //to get the job done with enter button
      dispatch(addTodo(inputData), setInputData(""));
      if (inputData !== "") {
        addTaskBtnClick();
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
              addTaskBtnClick();
            }
          }}
        >
          Add Task
        </button>
        <button
          className="todo__icon-btn"
          onClick={() => {
            setIsAddTaskVisible(!isAddTaskVisible);
            setIsBtnDisabled(!isBtnDisabled);
          }}
        >
          <img src={del} alt="icon"></img>
        </button>
      </div>
    </div>
  );
};

export default AddTask;
