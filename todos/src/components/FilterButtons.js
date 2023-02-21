import React from "react";
import { setFilter } from "actions/index";
import { useDispatch, useSelector } from "react-redux";
import { ALL, INCOMPLETE, COMPLETE } from "constants";
import classNames from "classnames";

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

  const mainDivClassName = classNames("btn__progress_button", {
    "btn__progress_button--disable": listLength === 0,
  });
  const AllButtonClassName = classNames("btn__progress_button", {
    "btn__progress_button--disable": filter === ALL && listLength !== 0,
  });
  const IncompleteButtonClassName = classNames("btn__progress_button", {
    "btn__progress_button--disable": filter === INCOMPLETE,
  });
  const CompleteButtonClassName = classNames("btn__progress_button", {
    "btn__progress_button--disable": filter === COMPLETE,
  });

  return (
    <div className={mainDivClassName}>
      <button className={AllButtonClassName} onClick={handleAllTodos}>
        All
      </button>
      <button
        className={IncompleteButtonClassName}
        onClick={handleIncompleteTodos}
      >
        Incomplete
      </button>
      <button className={CompleteButtonClassName} onClick={handleCompleteTodos}>
        Complete
      </button>
    </div>
  );
};

export default FilterButtons;
