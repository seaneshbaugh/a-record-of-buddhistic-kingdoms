import React, { Component } from "react";
import PropTypes from "prop-types";
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

Subtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string
};

export default Subtitle;
