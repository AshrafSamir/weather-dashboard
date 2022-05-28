import './App.css';
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import SummaryPage from './pages/SummaryPage.js';
import Sidebar from './components/Sidebar'


class App extends Component {
  render() {
    return (
      <div className="layout">
          <Router>
            <Fragment>

              <Sidebar/>
              <SummaryPage />
            </Fragment>
          </Router>
      </div>
    );
  }
}

export default connect()(App);
