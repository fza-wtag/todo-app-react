import "./App.css";
import Navbar from "./components/Navbar";
import TopButtons from "./components/TopButtons";
import Todos from "./components/Todos";
import LoadMoreBtn from "./components/LoadMoreBtn";
import EmptyTaskList from "./components/EmptyTaskList";

function App() {
  return (
    <div>
      <Navbar />
      <TopButtons />
      <Todos />
      <LoadMoreBtn />
    </div>
  );
}

export default App;
