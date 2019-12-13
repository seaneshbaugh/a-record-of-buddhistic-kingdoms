import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./index.module.css";

class FootnoteCallNumber extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.setCurrentFootnote(this.props.footnoteNumber - 1);
  }

  render() {
    const className = classNames(this.props.className, styles.footnoteCallNumber);

    return (
      <span className={className} onClick={this.handleClick}>[{this.props.footnoteNumber}]</span>
    );
  }
}

FootnoteCallNumber.propTypes = {
  footnoteNumber: PropTypes.number.isRequired,
  setCurrentFootnote: PropTypes.func.isRequired
};

export default FootnoteCallNumber;
