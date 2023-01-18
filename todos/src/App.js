import "./App.css";
import Navbar from "./components/navbar";
import TopButtons from "./components/topButtons";
import AllTodos from "./components/allTodos";
import LoadmoreBtn from "./components/loadmoreBtn";

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
