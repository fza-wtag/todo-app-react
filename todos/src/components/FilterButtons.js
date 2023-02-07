import React from "react";
import { setFilter } from "actions/index";
import { useDispatch, useSelector } from "react-redux";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterReducer.filter);
  const ListLength = useSelector((state) => state.todoReducers.list).length;

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
    <div
      className={`btn__progress_button ${
        ListLength === 0 ? "btn__progress_button--disable" : null
      }`}
    >
      <button
        className={
          filter === "all" && ListLength !== 0
            ? "btn__progress_button--disable"
            : null
        }
        onClick={handleAllTodos}
      >
        All
      </button>
      <button
        className={
          filter === "incomplete" ? "btn__progress_button--disable" : null
        }
        onClick={handleIncompleteTodos}
      >
        Incomplete
      </button>
      <button
        className={
          filter === "complete" ? "btn__progress_button--disable" : null
        }
        onClick={handleCompleteTodos}
      >
        Complete
      </button>
    </div>
  );
};

export default FilterButtons;
