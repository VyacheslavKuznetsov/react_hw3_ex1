import React from "react";
import Clock from "./components/Ex1/Clock";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <p><h1>1. Часы</h1></p>
        <Clock />
        <br />
      </div>
    );
  }
}
