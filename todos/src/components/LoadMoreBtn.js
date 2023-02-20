import React from "react";
import "styles/loadmoreBtn.css";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentPage } from "actions";
import { LOAD_MORE, SHOW_LESS } from "constants";

function LoadMoreBtn(props) {
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

  const typeLoadMore = props.type === LOAD_MORE;
  const typeShowLess = props.type === SHOW_LESS;

  return (
    <div className="load-more">
      {typeLoadMore && (
        <button className="load-more__button" onClick={handleLoadMore}>
          {props.type}
        </button>
      )}
      {typeShowLess && (
        <button className="load-more__button" onClick={handleShowLess}>
          {props.type}
        </button>
      )}
    </div>
  );
}

export default LoadMoreBtn;
