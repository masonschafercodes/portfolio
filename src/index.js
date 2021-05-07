import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Projects } from "./pages/Projects";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
