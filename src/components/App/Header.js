import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">{this.props.title}</h1>
        <h2 className="header__subtitle">{this.props.subtitle}</h2>
      </header>
    );
  }
}

export default Header;
