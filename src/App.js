import './App.css';
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import SummaryComponent from './components/SummaryComponent.js';


class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <Fragment>
              <SummaryComponent/>
            </Fragment>
          </Router>
      </div>
    );
  }
}

export default connect()(App);
