import { React, useEffect } from "react";
import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import { Provider } from "react-redux";
import store from "store";
import TopContent from "components/TopContent";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCurrentTodos } from "supabaseData";
import { addInitialData } from "actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await getCurrentTodos();
      dispatch(addInitialData(initialData));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <TopContent />
      <Todos />
    </div>
  );
}

export default App;
