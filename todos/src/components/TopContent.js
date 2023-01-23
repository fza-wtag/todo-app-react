import React from "react";
import "../styles/topContent.css"
import FilterButtons from "./FilterButtons.js"

const TopContent = () => {
  return (
    <div className="top-content">
      <h1>Add Tasks</h1>
      <div className="top-content__buttons">
        <button className="btn btn__create_button">
          <i className="fa-sharp fa-solid fa-plus"></i> Create
        </button>
        <FilterButtons />
      </div>
    </div>
  );
};

export default TopContent;
