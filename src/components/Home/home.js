import React from "react";
import "./home.css";
import Typewriter from "../utils/useTypewriter";

function Home() {
  return (
    <div id="home-card">
      <h2>Welcome,</h2>
      <h1>
        <Typewriter text={"I'm Ayden, a fullstack developer"} />
      </h1>
    </div>
  );
}

export default Home;
