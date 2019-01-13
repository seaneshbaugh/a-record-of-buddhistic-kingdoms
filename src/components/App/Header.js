import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>{this.props.title}</h1>
        <h2 className={styles.subtitle}>{this.props.subtitle}</h2>
      </header>
    );
  }
}

export default Header;
