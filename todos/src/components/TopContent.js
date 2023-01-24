import React, {useState} from "react";
import "styles/topContent.css"
import FilterButtons from "components/FilterButtons.js"

const TopContent = () => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  console.log(isAddTaskVisible);

  return (
    <div className="top-content">
      <h1>Add Tasks</h1>
      <div className="top-content__buttons">
        <button className="btn btn__create_button" onClick={() => setIsAddTaskVisible(!isAddTaskVisible)}>
          <i className="fa-sharp fa-solid fa-plus"></i> Create
        </button>
        <FilterButtons />
      </div>
    </div>
  );
};

export default TopContent;
