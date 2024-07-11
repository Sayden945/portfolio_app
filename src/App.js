import { HashRouter } from "react-router-dom";
import Nav from "./components/Nav/navbar";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
      </HashRouter>
    </div>
  );
}

export default App;
