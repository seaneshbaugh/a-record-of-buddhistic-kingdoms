import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class Footer extends Component {
  render() {
    return(
      <footer className={styles.footer}>
        {this.props.children}
      </footer>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
