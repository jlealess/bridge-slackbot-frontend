import React, { Component } from "react";
import { connect } from 'react-redux';
import logo from "./logo.svg";
import "./App.css";

// import { pollGroup } from "./api";

class App extends Component {
  // uncomment this to test that you are connected to the backend!
  // componentDidMount() {
  //   pollGroup();
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {

};
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
