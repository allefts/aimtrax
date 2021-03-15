import React, { Component } from "react";
import styled from "styled-components";
import { GiCircle, GiConsoleController } from "react-icons/gi";

const StyledGamePage = styled.div`
  .countdown-timer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10rem;
    font-family: Montserrat;
    color: #c72c41;
  }

  .canvas {
    width: 100%;
    height: 800px;
    position: relative;
    cursor: crosshair;
  }

  .target {
    position: absolute;
    left: ${(props) => props.xPosition};
    top: ${(props) => props.yPosition};
    height: 3em;
    width: 3em;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    border: 1px solid #c72c41;
  }

  .score-container {
  }

  .score-title,
  .score {
    margin-left: 2rem;
    font-family: Rasa;
    font-size: 3rem;
    color: #3282b8;
  }

  .score {
    color: #c72c41;
    font-size: 5rem;
  }
`;

class Game extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      timeUntilStart: 5,
      points: 0,
      clicked: false,
      xPosition: "0%",
      yPosition: "0%",
    };

    this.countDown = this.countDown.bind(this);
    this.clickedTarget = this.clickedTarget.bind(this);
    this.renderTarget = this.renderTarget.bind(this);
  }

  componentDidMount() {
    this.countDown();
  }

  componentDidUpdate() {
    if (this.state.isPlaying === false) this.countDown();
  }

  countDown = () => {
    if (this.state.timeUntilStart > 0) {
      setTimeout(() => {
        this.setState({ timeUntilStart: this.state.timeUntilStart - 1 });
      }, 1000);
    }
  };

  clickedTarget = () => {
    //Starts game and adds 10 to points when clicked
    this.setState({
      isPlaying: true,
      points: this.state.points + 100,
      clicked: true,
    });

    this.renderTarget();
  };

  renderTarget = () => {
    this.setState({
      xPosition: `${Math.floor(Math.random() * (90 - 10)) + 10}%`,
      yPosition: `${Math.floor(Math.random() * (90 - 10)) + 10}%`,
      clicked: false,
    });
    console.log(this.state.xPosition, this.state.yPosition);
  };

  render() {
    return (
      <StyledGamePage
        xPosition={this.state.xPosition}
        yPosition={this.state.yPosition}
      >
        <h1
          className="countdown-timer"
          style={{ opacity: `0.${this.state.timeUntilStart * 1.5}` }}
        >
          {this.state.timeUntilStart}
        </h1>
        <div className="score-container">
          <h1 className="score-title">
            Current Score: <span className="score">{this.state.points} </span>
          </h1>
        </div>
        <div className="canvas">
          <div onClick={this.clickedTarget} className="target"></div>
        </div>
      </StyledGamePage>
    );
  }
}

export default Game;
