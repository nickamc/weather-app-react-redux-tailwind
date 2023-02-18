import Week from "./components/containers/Week";
import Today from "./components/containers/Today";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="flex flex-row flex-wrap justify-center text-[#1f1e31]">
      <Navbar />
      <Today />
      <Week />
    </div>
  );
}

export default App;
