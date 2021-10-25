import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <Link to="/">
            <i className="fas fa-angle-left fa-2x" />
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Enter Region" />
            <i className="fas fa-angle-right fa-2x" />
          </div>
          <div className="right-navigation">
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default Navigation;
