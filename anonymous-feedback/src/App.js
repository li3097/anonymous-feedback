import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Practical from './components/practical/practical';
import SystemsIntegration from './components/systems-integration/systems-integration';
import Data from './components/data/data';
import Studio from './components/studio/studio';

function App() {

  const headerStyle = {
    margin: "20px",
  };

  const divStyle = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    background: "#F6FAF8"
  }

  return (
    <Router>
      <div style={divStyle}>
        <div>
          <header style={headerStyle}>
            <h1>
              <span className="left-text">Learning IoT  |  </span>
              <span className="byline">anonymous-feedback</span>
            </h1>
          </header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">practical</Link></li>
                <li><Link to={'/systems-integration'} className="nav-link">systems integration</Link></li>
                <li><Link to={'/data'} className="nav-link">data</Link></li>
                <li><Link to={'/studio'} className="nav-link">studio</Link></li>
              </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Practical} />
              <Route path='/systems-integration' component={SystemsIntegration} />
              <Route path='/data' component={Data} />
              <Route path='/studio' component={Studio} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
