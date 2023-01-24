import React, { useState } from "react";
import "styles/topContent.css";
import FilterButtons from "components/FilterButtons.js";
import { createContext } from "react";

export const TopContentContext = createContext();

const TopContent = (props) => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);

  return (
    <TopContentContext.Provider
      value={{ isAddTaskVisible, setIsAddTaskVisible }}
    >
      <div className="top-content">
        <h1>Add Tasks</h1>
        <div className="top-content__buttons">
          <button
            className="btn btn__create_button"
            onClick={() => setIsAddTaskVisible(!isAddTaskVisible)}
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
