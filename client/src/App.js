import React, { Component } from 'react';
import Home from './Components/Home';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Home}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
