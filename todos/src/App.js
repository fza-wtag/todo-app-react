import "./App.css";
import Navbar from "./components/Navbar";
import TopButtons from "./components/TopButtons";
import AllTodos from "./components/AllTodos";
import LoadmoreBtn from "./components/LoadmoreBtn";
import EmptyTaskList from "./components/EmptyTaskList";

function App() {
  return (
    <div>
      <Navbar />
      <TopButtons />
      <AllTodos />
      <LoadmoreBtn />
    </div>
  );
}

export default App;
