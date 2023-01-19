import React from "react";
import "../styles/topButtons.css"

const TopButtons = () => {
  return (
    <div className="top-content">
      <h1>Add Tasks</h1>
      <div className="top-buttons">
        <button className="create-btn">
          <i class="fa-sharp fa-solid fa-plus"></i> Create
        </button>
        <div className="progress-btn">
          <button>All</button>
          <button>Incomplete</button>
          <button>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default TopButtons;
