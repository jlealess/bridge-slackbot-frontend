import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
// import { pollGroup } from "./api";

const theme = {
  bridgeBlue: '#000c9e',
  bridgeGreen: '#08c39d',
  bridgeTurquoise: '#65b8de',
  bridgePink: '#eb2ca8',
  black: '#393939',
  offWhite: '#ededed',
  lightGrey: '#e1e1e1',
};

class App extends Component {
  // uncomment this to test that you are connected to the backend!
  // componentDidMount() {
  //   pollGroup();
  // }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
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
