import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import TopContentContext from "./components/TopContent";
import { Provider } from "react-redux";
import store from "store";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        <TopContentContext>
          <Todos />
        </TopContentContext>
      </Provider>
    </Fragment>
  );
}

export default App;
