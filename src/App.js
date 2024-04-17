import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import Navbar from "./components/Nav/navbar";
import Intro from "./components/Intro/intro";
import Contact from "./components/Header/Contact";
import Portfolio from "./components/Portfolio/portfolio";
import About from "./components/About/about";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Contact />

          <div className="content">
            <Routes>
              <Route
                exact
                path="/"
                className="menuListItems"
                element={<Intro />}
              >
                Home
              </Route>
              <Route
                exact
                path="/portfolio"
                className="menuListItems"
                element={<Portfolio />}
              >
                Home
              </Route>
              <Route
                exact
                path="/about"
                className="menuListItems"
                element={<About />}
              >
                Home
              </Route>
            </Routes>
          </div>
          <Navbar />
        </div>
      </HashRouter>
    );
  }
}

export default App;
