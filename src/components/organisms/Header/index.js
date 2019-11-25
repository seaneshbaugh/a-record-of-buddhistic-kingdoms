import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

class Header extends Component {
  render() {
    const className = classNames(this.props.className, styles.header);

    return (
      <header className={className}>
        <Title className={styles.title}>{this.props.title}</Title>
        <Subtitle className={styles.subtitle}>{this.props.subtitle}</Subtitle>
        <nav className={styles.mainNav}>
          <Link to="/">Home</Link>&nbsp;|&nbsp;
          <Link to="/map">Map</Link>&nbsp;|&nbsp;
          <Link to="/people">People</Link>&nbsp;|&nbsp;
          <Link to="/bibliography">Bibliography</Link>&nbsp;|&nbsp;
          <Link to="/about">About</Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node
};

export default Header;
