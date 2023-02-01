import React from "react";
import "styles/topContent.css";
import FilterButtons from "components/FilterButtons.js";
import { useDispatch } from "react-redux";
import {
  toggleAddTaskVisibility,
  toggleAddTaskButtonVisibility,
} from "actions/index";
import { useSelector } from "react-redux";

const TopContent = (props) => {
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );
  const isCreateBtnDisabled = useSelector(
    (state) => state.toggleReducers.isCreateBtnDisabled
  );
  const dispatch = useDispatch();
  const handleCreateButtonClick = () => {
    dispatch(toggleAddTaskButtonVisibility(isCreateBtnDisabled));
    dispatch(toggleAddTaskVisibility(!isAddTaskVisible));
  };

  return (
    <div className="top-content">
      <h1>Add Tasks</h1>
      <div className="top-content__buttons">
        <button
          disabled={isCreateBtnDisabled}
          className={`btn btn__create_button ${
            isCreateBtnDisabled ? "btn__create_button--blur" : ""
          }`}
          onClick={handleCreateButtonClick}
        >
          <i className="fa-sharp fa-solid fa-plus"></i> Create
        </button>
        <FilterButtons />
      </div>
    </div>
  );
};

export default TopContent;
