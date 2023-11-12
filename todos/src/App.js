import React, { useEffect, Fragment } from "react";
import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import TopContent from "components/TopContent";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchInitialData } from "actions/index";
import { useSelector } from "react-redux";
import SplashScreen from "components/SplashScreen";

function App() {
  const splashLoadingState = useSelector(
    (state) => state.loadingReducers.splashLoadingState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return splashLoadingState ? (
    <SplashScreen />
  ) : (
      <Fragment>
        <Navbar />
        <ToastContainer />
        <TopContent />
        <Todos />
      </Fragment>
  );
}

export default App;
