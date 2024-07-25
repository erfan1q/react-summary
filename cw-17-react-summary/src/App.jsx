import "./App.css";
import Summarycard from "./components/Summary-card";
import Result from "./components/Result";

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Result />
      <Summarycard />
    </div>
  );
}

export default App;
