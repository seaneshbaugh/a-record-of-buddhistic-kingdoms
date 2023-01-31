import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class LinkOrText extends Component {
  render() {
    const className = classNames(this.props.className, styles.link);

    if (this.props.url) {
      return (
        <a href={this.props.url} className={className} target="_blank" rel="noopener noreferrer">{this.props.text}</a>
      );
    } else {
      return this.props.text;
    }
  }
}

LinkOrText.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default LinkOrText;
