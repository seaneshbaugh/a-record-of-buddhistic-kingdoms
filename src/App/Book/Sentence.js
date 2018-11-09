import React, { Component } from "react";
import "./Sentence.css";

class Sentence extends Component {
  render() {
    return (
      <span className="sentence">
        {this.props.text}
      </span>
    );
  }
}

export default Sentence;
