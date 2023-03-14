import React from "react";
import "styles/topContent.css";
import FilterButtons from "components/FilterButtons.js";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAddTaskVisibility,
  toggleAddTaskButtonVisibility,
} from "actions/index";

const TopContent = () => {
  const isAddTaskVisible = useSelector(
    (state) => state.toggleReducers.isAddTaskVisible
  );
  const isCreateButtonDisabled = useSelector(
    (state) => state.toggleReducers.isCreateButtonDisabled
  );
  const dispatch = useDispatch();
  const handleCreateButtonClick = () => {
    dispatch(toggleAddTaskButtonVisibility(isCreateButtonDisabled));
    dispatch(toggleAddTaskVisibility(!isAddTaskVisible));
  };
  const loadingState = useSelector(
    (state) => state.loadingReducers.loadingState
  );
  const createButtonClassNameLogic = `btn btn__create_button ${
    (isCreateButtonDisabled || loadingState) && "btn__create_button--blur"
  }`;

  return (
    <div className="top-content" data-testid="top-content">
      <h1>Add Tasks</h1>
      <div className="top-content__buttons">
        <button
          className={createButtonClassNameLogic}
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
