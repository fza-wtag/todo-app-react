import React from "react";
import { setFilter } from "actions/index";
import { useDispatch, useSelector } from "react-redux";
import { ALL, INCOMPLETE, COMPLETE } from "constants";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterReducer.filter);
  const listLength = useSelector((state) => state.todoReducers.list).length;

  const handleAllTodos = () => {
    dispatch(setFilter(ALL));
  };
  const handleIncompleteTodos = () => {
    dispatch(setFilter(INCOMPLETE));
  };
  const handleCompleteTodos = () => {
    dispatch(setFilter(COMPLETE));
  };

  return (
    <div
      className={`btn__progress_button ${
        listLength === 0 ? "btn__progress_button--disable" : null
      }`}
    >
      <button
        className={
          filter === ALL && listLength !== 0
            ? "btn__progress_button--disable"
            : null
        }
        onClick={handleAllTodos}
      >
        All
      </button>
      <button
        className={
          filter === INCOMPLETE ? "btn__progress_button--disable" : null
        }
        onClick={handleIncompleteTodos}
      >
        Incomplete
      </button>
      <button
        className={filter === COMPLETE ? "btn__progress_button--disable" : null}
        onClick={handleCompleteTodos}
      >
        Complete
      </button>
    </div>
  );
};

export default FilterButtons;
