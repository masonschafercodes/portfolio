import React from "react";
import { Fade } from "react-awesome-reveal";
import { SiJavascript, SiReact, SiTypescript, SiRedux, SiCsswizardry, SiMongodb } from 'react-icons/si';
import { BiCoffeeTogo } from 'react-icons/bi';
import { IconContext } from "react-icons";
import "./App.css";
import ThingsILove from "./Components/ThingsILove";
import Contact from "./Components/Contact";

function App() {
  return (
    <Fade>
      <div className="App">
        <div className="nav-container">
          <a href="#contact" className="font-main">
            <p>Contact Me</p>
            <br />
          </a>
          <a href="/projects" className="font-main">
            <p>Projects</p>
            <br />
          </a>
          <a href="https://masonschafercodes-blog.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-main">
            <p>Blog</p>
          </a>
          <a href="https://github.com/masonschafercodes" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/masonschafer" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <div className="main-container">
          <img
            src="https://i.ibb.co/7kPQGVT/icon.png"
            alt="Mason Schafer Portfolio"
          />
          <h1 className="font-main color1">
            I am <span className="hash-color">Mason Schafer</span>.
          </h1>
          <div className="about-me">
            <h3 className="font-main color1"><span className="hash-color">Technologies</span> I use</h3>
            <div className="whoami">
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <SiJavascript />
                <SiReact />
                <SiTypescript />
                <SiRedux />
                <SiCsswizardry />
                <SiMongodb />
              </IconContext.Provider>
            </div>
          </div>
          <ThingsILove
            url={[
              "https://i.ibb.co/25z7WG9/pexels-adrianna-calvo-57627.jpg",
              "https://i.ibb.co/1673C48/pexels-kevin-ku-577585.jpg",
              "https://i.ibb.co/PjBPSCN/pexels-tim-gouw-139762.jpg",
              "https://i.ibb.co/VtVck8w/pexels-evie-shaffer-2923672.jpg",
              "https://i.ibb.co/HzgcpND/pexels-startup-stock-photos-7103.jpg",
              "https://i.ibb.co/nsZGK1t/pexels-north-1407322.jpg"
            ]}
          />
          <h1 className="font-main color1 mb-1" id="contact">Grab a Coffee? <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <BiCoffeeTogo />
          </IconContext.Provider></h1>
          <Contact />
        </div>
        <footer>
          <div className="footer-container">
            <div className="socials-container">
              <a
                href="https://github.com/masonschafercodes"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="font-main color1">
                  <span className="hash-color">#</span> GitHub
                </p>
              </a>
              <a
                href="https://linkedin.com/in/masonschafer/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="font-main color1">
                  <span className="hash-color">#</span> LinkedIn
                </p>
              </a>
            </div>
            <div className="cpyright-container">
              <p className="font-main color1">2021 Mason Schafer</p>
            </div>
          </div>
        </footer>
      </div>
    </Fade>
  );
}

export default App;
