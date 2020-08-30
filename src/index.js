import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './pages/Blog'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/blog" component={Blog} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
