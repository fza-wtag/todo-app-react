import React from "react";
import "styles/loadmoreBtn.css";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentPage } from "actions";

function LoadMoreBtn(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );

  const handleLoadMore = () => {
    dispatch(updateCurrentPage(currentPage + 1));
  };

  const handleshowLess = () => {
    dispatch(updateCurrentPage(1));
  };

  return (
    <div className="load-more">
      {props.type === "Load More" && (
        <button className="load-more__button" onClick={handleLoadMore}>
          {props.type}
        </button>
      )}
      {props.type === "Show Less" && (
        <button className="load-more__button" onClick={handleshowLess}>
          {props.type}
        </button>
      )}
    </div>
  );
}

export default LoadMoreBtn;
