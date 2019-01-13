import React, { Component } from "react";
import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import styles from "./index.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Title className={styles.title}>{this.props.title}</Title>
        <Subtitle className={styles.subtitle}>{this.props.subtitle}</Subtitle>
      </header>
    );
  }
}

export default Header;
