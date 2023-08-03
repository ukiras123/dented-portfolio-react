import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.scss";
function App() {
  return (
    <>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />

      <div className="wrapper">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
