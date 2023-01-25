import "App.css";
import Navbar from "components/Navbar";
import Todos from "components/Todos";
import TopContentContext from "./components/TopContent";

function App() {
  return (
    <div>
      <Navbar />
      <TopContentContext>
        <Todos />
      </TopContentContext>
    </div>
  );
}

export default App;
