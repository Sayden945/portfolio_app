import { HashRouter } from "react-router-dom";
import Navbar from "./components/Nav/navbar";
import Contact from "./components/Contact/contact";
import Terminal from "./components/Terminal/terminal";
import Particles from "./components/particles";

import "./App.css";
import Footer from "./components/Home/footer";

function App() {
  return (
    <div className="App">
      <Particles id="tsparticles" />

      {/* Header bar containing contact icons */}
      <header>
        <Contact />
      </header>

      <div className="main">
        <HashRouter>
          {/* Side nav */}
          <Navbar />

          {/* Content terminal */}
          <Terminal />
        </HashRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
