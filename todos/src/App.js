import "./App.css";
import Navbar from "./components/navbar";
import TopButtons from "./components/topButtons";
import AllTodos from "./components/allTodos";

function App() {
  return (
    <div>
      <Navbar />
      <TopButtons />
      <AllTodos />
    </div>
  );
}

export default App;
