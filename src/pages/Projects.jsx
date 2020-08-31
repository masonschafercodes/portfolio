import React from "react";
import "../App.css";
import "../Project.css";
import Project from "../Components/Project";
import { Fade } from "react-awesome-reveal";

export const Projects = () => {
  return (
    <Fade>
      <div>
        <div className="nav-container">
          <a href="/" className="font-main">
            <p>Home</p>
            <br />
          </a>
          <a href="/blog" className="font-main">
            <p>Blog</p>
          </a>
        </div>
        <div className="projects-header">
          <h1 style={{ color: "#B2BEC3" }}>Projects</h1>
          <hr />
        </div>
        <div className="projects">
          <Project
            link="https://github.com/masonschafercodes/portfolio"
            name="Portfolio Website"
            desc="This is my portfolio website that I have build completely in ReactJS."
            img="https://i.ibb.co/2SwVMd6/port1.png"
            tags={["web dev", 'React']}
          />
        </div>
      </div>
    </Fade>
  );
};
