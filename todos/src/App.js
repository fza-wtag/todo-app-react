import React, { useEffect, Fragment } from "react";
import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import TopContent from "components/TopContent";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCurrentTodos } from "supabaseData";
import { addInitialData } from "actions/index";
import { setSplashLoadingState } from "actions";
import { useSelector } from "react-redux";
import SplashScreen from "components/SplashScreen";

function App() {
  const splashLoadingState = useSelector(
    (state) => state.loadingReducers.splashLoadingState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setSplashLoadingState(true));
      const initialData = await getCurrentTodos();
      dispatch(setSplashLoadingState(false));
      dispatch(addInitialData(initialData));
    };
    fetchData();
  }, []);

  return splashLoadingState ? (
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
