import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" },
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true,
    });
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      // Right arrow key
      const newPos = parseInt(this.state.ballPosition.left) + 5;
      this.setState({
        ballPosition: { left: `${newPos}px` },
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="playground">
        {this.state.renderBall ? (
          <div className="ball" style={this.state.ballPosition}></div>
        ) : (
          <button className="start" onClick={this.buttonClickHandler}>
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
