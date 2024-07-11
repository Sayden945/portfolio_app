import { HashRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Navbar from "./components/Nav/navbar";
import Home from "./components/Home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <p>Ayden Smith</p>
      </header>

      <div className="main">
        <HashRouter>
          <div>
            <Navbar />
          </div>

          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}>
                Home
              </Route>
              <Route exact path="/about" element={<About />}>
                About
              </Route>
              <Route exact path="/projects" element={<Projects />}>
                projects
              </Route>

              <Route exact path="/skills" element={<Skills />}>
                Skills
              </Route>
            </Routes>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
