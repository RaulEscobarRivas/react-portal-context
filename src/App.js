import React, { Component } from 'react';
import { connect } from './context';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {`Welcome, ${this.props.name}`}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(App);
