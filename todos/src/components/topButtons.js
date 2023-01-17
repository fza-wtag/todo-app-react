import React from "react";

const TopButtons = () => {
  return (
    <div className="top-content">
      <h2>Add Tasks</h2>
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
