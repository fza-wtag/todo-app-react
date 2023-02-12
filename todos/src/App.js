import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import { Provider } from "react-redux";
import store from "store";
import TopContent from "components/TopContent";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <ToastContainer />
        <TopContent />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
