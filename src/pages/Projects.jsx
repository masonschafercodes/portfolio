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
          <Project
            link="https://masonschafercodes.github.io/mark-it-down"
            name="Mark-It-Down"
            desc="Mark-down viewer in the browser."
            img="https://i.ibb.co/YL6pjVK/md.png"
            tags={["web dev", 'Vue']}
          />
          <Project
            link="https://masonschafercodes.github.io/forests-onb/"
            name="forests."
            desc="Nicely designed website to learn about the different types of forests."
            img="https://i.ibb.co/HrztfB1/forest.png"
            tags={["web dev", 'React', 'Design']}
          />
        </div>
      </div>
    </Fade>
  );
};
