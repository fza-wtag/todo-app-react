import React from "react";
import { setFilter } from "actions/index";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
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

  const loadingState = useSelector(
    (state) => state.loadingReducers.loadingState
  );

  const mainDivClassName = classnames("btn__progress_button", {
    "btn__progress_button--disable": listLength === 0 || loadingState,
  });
  const AllButtonClassName = classnames({
    "btn__progress_button--disable":
      filter === "all" && listLength !== 0 && !loadingState,
  });
  const IncompleteButtonClassName = classnames({
    "btn__progress_button--disable": filter === "incomplete",
  });
  const CompleteButtonClassName = classnames({
    "btn__progress_button--disable": filter === "complete",
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
