import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import LoadMoreBtn from "./components/LoadMoreBtn";
import EmptyTaskList from "./components/EmptyTaskList";
import TopContentContext from "./components/TopContent";

function App() {
  return (
    <div>
      <Navbar />
      <TopContentContext>
        <Todos />
      </TopContentContext>
      <LoadMoreBtn />
    </div>
  );
}

export default App;
