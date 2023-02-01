import React, { useState } from "react";
import "styles/topContent.css";
import FilterButtons from "components/FilterButtons.js";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { toggleAddTaskVisibility } from "actions/index";

export const TopContentContext = createContext();

const TopContent = (props) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const isAddTaskVisible = false;
  
  const dispatch = useDispatch();

  const handleCreateButtonClick = () => {
    setIsBtnDisabled(!isBtnDisabled);
    dispatch(toggleAddTaskVisibility(!isAddTaskVisible));
  };

  return (
    <TopContentContext.Provider
      value={{
        isBtnDisabled,
        setIsBtnDisabled,
      }}
    >
      <div className="top-content">
        <h1>Add Tasks</h1>
        <div className="top-content__buttons">
          <button
            disabled={isBtnDisabled}
            className={`btn btn__create_button ${
              isBtnDisabled ? "btn__create_button--blur" : ""
            }`}
            onClick={handleCreateButtonClick}
          >
            <i className="fa-sharp fa-solid fa-plus"></i> Create
          </button>
          <FilterButtons />
        </div>
      </div>
      {props.children}
    </TopContentContext.Provider>
  );
};

export default TopContent;
