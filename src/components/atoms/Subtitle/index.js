import React, { Component } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

class Subtitle extends Component {
  render() {
    const className = classNames(this.props.className, styles.subtitle);

    return (
      <h2 className={className}>{this.props.children || this.props.text}</h2>
    );
  }
}

export default Subtitle;
