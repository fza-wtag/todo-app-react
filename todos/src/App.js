import "./App.css";
import Navbar from "./components/Navbar";
import TopContent from "./components/TopContent";
import Todos from "./components/Todos";
import LoadMoreBtn from "./components/LoadMoreBtn";
import EmptyTaskList from "./components/EmptyTaskList";

function App() {
  return (
    <div>
      <Navbar />
      <TopContent />
      <Todos />
      <LoadMoreBtn />
    </div>
  );
}

export default App;
