import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Practical from './components/practical/practical';
import SystemsIntegration from './components/systems-integration/systems-integration';
import Data from './components/data/data';
import Studio from './components/studio/studio';

function App() {

  return (
    <Router>
        <div>
          <div className="project">
            Learning IoT
          </div>
          <div className="application">
            anonymous-feedback
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Practical </Link></li>
            <li><Link to={'/systems-integration'} className="nav-link">Systems Integration</Link></li>
            <li><Link to={'/data'} className="nav-link">Data</Link></li>
            <li><Link to={'/studio'} className="nav-link">Studio</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Practical} />
              <Route path='/systems-integration' component={SystemsIntegration} />
              <Route path='/data' component={Data} />
              <Route path='/studio' component={Studio} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
