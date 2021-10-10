import React, { Component } from "react";
import styled from "styled-components";

export default class Clock extends Component {
  state = {
    date: new Date(),
    timeOfDay: "",
    isMorning: false,
    isAfternoon: false,
    isEvening: false,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <ClockContainer>
        <h1>Hello, Kevin!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </ClockContainer>
    );
  }
}

// updateTimeOfDay( {
// if ()
// })

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-self: center;
  align-items: center;
  align-self: center;
  width: 15rem;
  height: 8rem;
`;
