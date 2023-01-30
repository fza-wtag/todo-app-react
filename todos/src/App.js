import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import TopContentContext from "./components/TopContent";
import { Provider } from "react-redux";
import store from "store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <TopContentContext>
          <Todos />
        </TopContentContext>
      </Provider>
    </div>
  );
}

export default App;
