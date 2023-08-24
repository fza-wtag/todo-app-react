import "App.css";
import Navbar from "components/Navbar";
import TopContent from "components/TopContent";
import Todos from "components/Todos";
import LoadMoreBtn from "components/LoadMoreBtn";

function App() {
  return (
    <div>
      <Navbar />
      <TopContent2 />
      <Todos />
      <LoadMoreBtn />
    </div>
  );
}

export default App;
