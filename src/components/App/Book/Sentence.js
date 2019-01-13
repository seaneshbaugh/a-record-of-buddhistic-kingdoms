import React, { Component } from "react";
import styles from "./Sentence.module.css";

class Sentence extends Component {
  render() {
    return (
      <span className={styles.sentence}>
        {this.props.text}
      </span>
    );
  }
}

export default Sentence;
