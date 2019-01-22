import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class Footer extends Component {
  render() {
    const className = classNames(this.props.className, styles.footer);

    return(
      <footer className={className}>
        {this.props.children}
      </footer>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
