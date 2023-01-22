import React from "react";
import "../styles/topContent.css"

const TopContent = () => {
  return (
    <div className="top-content">
      <h1>Add Tasks</h1>
      <div className="top-content__buttons">
        <button className="btn btn__create_button">
          <i class="fa-sharp fa-solid fa-plus"></i> Create
        </button>
        <div className="btn__progress_button">
          <button>All</button>
          <button>Incomplete</button>
          <button>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
