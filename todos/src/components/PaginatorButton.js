import React from "react";
import "styles/paginatorButton.css";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentPage } from "actions";
import { LOAD_MORE, SHOW_LESS } from "constants";

function PaginatorButton({ type }) {
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );

  const handleLoadMore = () => {
    dispatch(updateCurrentPage(currentPage + 1));
  };

  const handleShowLess = () => {
    dispatch(updateCurrentPage(1));
  };

  const typeLoadMore = type === LOAD_MORE;
  const typeShowLess = type === SHOW_LESS;

  return (
    <div className="load-more">
      {typeLoadMore && (
        <button
          className="load-more__button"
          onClick={handleLoadMore}
          data-testid="load-more-button"
        >
          {LOAD_MORE}
        </button>
      )}
      {typeShowLess && (
        <button
          className="load-more__button"
          onClick={handleShowLess}
          data-testid="show-less-button"
        >
          {SHOW_LESS}
        </button>
      )}
    </div>
  );
}

export default PaginatorButton;
