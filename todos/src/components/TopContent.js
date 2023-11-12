import React, { useState } from "react";
import "styles/topContent.css";
import FilterButtons from "components/FilterButtons.js";
import { createContext } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export const TopContentContext = createContext();

const TopContent = (props) => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  const [isCreatedBtnDisabled, setIsCreatedBtnDisabled] = useState(false);

  return (
    <TopContentContext.Provider
      value={{
        isAddTaskVisible,
        setIsAddTaskVisible,
        isCreatedBtnDisabled,
        setIsCreatedBtnDisabled,
      }}
    >
      <div className="top-content">
        <h1>Add Tasks</h1>
        <div className="top-content__buttons">
          <button
            disabled={isCreatedBtnDisabled}
            className={`btn btn__create_button ${
              isCreatedBtnDisabled ? "btn__create_button--blur" : ""
            }`}
            onClick={(event) => {
              setIsCreatedBtnDisabled(!isCreatedBtnDisabled);
              setIsAddTaskVisible(!isAddTaskVisible);
            }}
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
