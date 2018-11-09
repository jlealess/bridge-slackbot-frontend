import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

const theme = {
    black: "#525252",
    borderRadius: "3px",
    bridgeBlue: "#000c9e",
    bridgeGreen: "#08c39d",
    bridgeLogoBlue: "#4e57ca",
    bridgeLogoPink: "#eb2c97",
    bridgeLogoTurquoise: "#2fa1d4",
    bridgePink: "#eb2ca8",
    bridgeTurquoise: "#65b8de",
    darkGrey: "#b1b1b1",
    lightGrey: "#e1e1e1",
    offWhite: "#f8f8f8",
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
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
