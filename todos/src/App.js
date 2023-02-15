import React, { useEffect, Fragment } from "react";
import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import TopContent from "components/TopContent";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCurrentTodos } from "supabaseData";
import { addInitialData } from "actions/index";
import { setLoadingState } from "actions";
import { useSelector } from "react-redux";
import SplashScreen from "components/SplashScreen";

function App() {
  const loadingState = useSelector(
    (state) => state.laodingReducer.loadingState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoadingState(true));
      const initialData = await getCurrentTodos();
      dispatch(setLoadingState(false));
      dispatch(addInitialData(initialData));
    };
    fetchData();
  }, [dispatch]);

  return loadingState ? (
    <SplashScreen />
  ) : (
    <>
      <Fragment>
        <Navbar />
        <ToastContainer />
        <TopContent />
        <Todos />
      </Fragment>
    </>
  );
}

export default App;
