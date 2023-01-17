import "./App.css";
import Navbar from "./components/navbar";
import TopButtons from "./components/topButtons";
import AddTask from "./components/addTask";
import IncompleteTask from "./components/incompleteTask";
import CompletedTask from "./components/completedTask";

function App() {
  return (
    <div>
      <Navbar />
      <TopButtons />
      <AddTask />
      <IncompleteTask />
      <CompletedTask />
    </div>
  );
}

export default App;
