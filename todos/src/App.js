import "./App.css";
import Navbar from "./components/navbar";
import TopButtons from "./components/topButtons";
import AddTask from "./components/addTask";

function App() {
  return (
    <div>
      <Navbar />
      <TopButtons />
      <AddTask />
    </div>
  );
}

export default App;
