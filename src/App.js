import React from "react";
import Clock from "./components/Ex1/Clock";
import Blog from "./components/Ex2/Blog";
import CondRender from './components/Ex3/CondRender';
import "./App.css";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1 className="exampleName">1. Часы</h1>
        <Clock />
        <hr className="border" />
        <h1 className="exampleName">2. Новости</h1>
        <Blog />
        <hr className="border" />
        <h1 className="exampleName">3. Условный рендеринг</h1>
        <CondRender />
      </div>
    );
  }
}
