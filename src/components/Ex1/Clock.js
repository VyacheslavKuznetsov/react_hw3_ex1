/*

    Часы, тикающие раз в 30 секунд

*/

import React from "react";

export default class Clock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  timer;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
