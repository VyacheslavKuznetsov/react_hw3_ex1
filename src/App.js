import React from "react";
import Clock from "./components/Ex1/Clock";
import Blog from "./components/Ex2/Blog";
import "./App.css";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <p><h1 className="exampleName">1. Часы</h1></p>
        <Clock />
        <hr className="border" />
        <p><h1 className="exampleName">2. Новости</h1></p>
        <Blog />
      </div>
    );
  }
}
