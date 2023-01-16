import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="top-content">
        <h3>Add a Task</h3>
        <div className="top-buttons">
          <button className="create-btn">+ Create</button>
          <div className="progress-btn">
            <button>All</button>
            <button>Incomplete</button>
            <button>Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
