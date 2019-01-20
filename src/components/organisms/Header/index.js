import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Title className={styles.title}>{this.props.title}</Title>
        <Subtitle className={styles.subtitle}>{this.props.subtitle}</Subtitle>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/map">Map</Link>&nbsp;|&nbsp;
        <Link to="/people">People</Link>&nbsp;|&nbsp;
        <Link to="/bibliography">Bibliography</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node
};

export default Header;
