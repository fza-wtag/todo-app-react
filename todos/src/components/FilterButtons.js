import React from "react";
import { setFilter } from "actions/index";
import { useDispatch } from "react-redux";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const handleAllTodos = () => {
    dispatch(setFilter("all"));
  };

  const handleIncompleteTodos = () => {
    dispatch(setFilter("incomplete"));
  };

  const handleCompleteTodos = () => {
    dispatch(setFilter("complete"));
  };

  return (
    <div className="btn__progress_button">
      <button onClick={handleAllTodos}>All</button>
      <button onClick={handleIncompleteTodos}>Incomplete</button>
      <button onClick={handleCompleteTodos}>Complete</button>
    </div>
  );
};

export default FilterButtons;
