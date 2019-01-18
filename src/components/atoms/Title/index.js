import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.module.css";

class Title extends Component {
  render() {
    const className = classNames(this.props.className, styles.title);

    return (
      <h1 className={className}>{this.props.children || this.props.text}</h1>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string
};

export default Title;
