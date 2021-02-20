import React, { Component } from 'react';
import Home from './Pages/Home';

import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inital: false
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <AnimatePresence initial={this.state.inital} exitBeforeEnter>
            <div>
              <Route exact path="/" component={Home}/>
            </div>
          </AnimatePresence>

        </div>
      </Router>
    );
  }
}

export default App;
