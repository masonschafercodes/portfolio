import React from 'react';
import { Fade } from "react-awesome-reveal";
import './App.css';

function App() {
  return (
    <Fade>
    <div className="App">
      <div className="nav-container">
        <a href="/projects" className="font-main"><p>Projects</p><br/></a>
        <a href="/blog" className="font-main"><p>Blog</p></a>
      </div>
      <div className="main-container">
        <img src="https://i.ibb.co/7kPQGVT/icon.png" alt="Mason Schafer Portfolio" />
        <h1 className="font-main color1">I am <span className="hash-color">Mason Schafer</span></h1>
        <div className="about-me">
          <h3 className="font-main color1">About me.</h3>
          <div className="whoami">
            <p className="font-main color1"><span className="hash-color">#</span> 19 years old</p>
            <p className="font-main color1"><span className="hash-color">#</span> Creative and Motivated</p>
            <p className="font-main color1"><span className="hash-color">#</span> Design-Oriented</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="socials-container">
            <a href="https://github.com/masonschafercodes" rel="noopener noreferrer" target="_blank"><p className="font-main color1"><span className="hash-color">#</span> GitHub</p></a>
            <a href="https://linkedin.com/in/masonschafer/" rel="noopener noreferrer" target="_blank"><p className="font-main color1"><span className="hash-color">#</span> LinkedIn</p></a>
          </div>
          <div className="cpyright-container">
          <p className="font-main color1">2020 Mason Schafer</p>
          </div>
        </div>
      </footer>
    </div>
    </Fade>
  );
}

export default App;
