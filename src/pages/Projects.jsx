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
        <div className="projects-header">
          <h1 style={{ color: "#B2BEC3" }}>Projects</h1>
          <hr />
        </div>
        <div className="projects">
          <Project 
            link="https://masonschafercodes.github.io/conways_game_of_life/"
            name="Conway's Game of Life"
            desc="Game of Life Simulation with React Hooks and Typescript"
            img="https://i.ibb.co/qnV3gR5/1280px-React-icon-svg.png"
            tags={["React", "Typescript", "Simulation"]}
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
