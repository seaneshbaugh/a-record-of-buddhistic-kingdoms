import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class Sentence extends Component {
  render() {
    return (
      <span className={styles.sentence}>
        {this.props.text}
      </span>
    );
  }
}

Sentence.propTypes = {
  text: PropTypes.string
};

export default Sentence;
