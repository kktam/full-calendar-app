import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

import logo from './logo.svg';
import './App.css';

class Calendar extends Component {
  componentDidMount() {
    const { calendar } = this.refs;

    this._calendar = $(calendar);
    this._calendar.fullCalendar();
  }

  render() {
    return (
      <div ref="calendar"></div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Calendar />
      </div>
    );
  }
}

export default App;
