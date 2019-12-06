import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class Person extends Component {
  name() {
    if (typeof this.props.name === "string") {
      return this.props.name;
    }

    // TODO: MOVE THIS SOMEWHERE ELSE!!!
    // TODO: Use redux store to determine current display option. Just trying to get this to sorta work for now.
    const languagePrecedence = ["legge", "modern", "pali", "sanskrit", "pinyinWithAccents", "pinyin", "romaji", "wadeGiles", "traditionalChinese", "simplifiedChinese", "japanese", "tajik"];

    const names = languagePrecedence.map((language) => this.props.name[language]).filter((name) => name);

    return names[0];
  }

  render() {
    const className = classNames(this.props.className, styles.person);

    return (
        <li className={className}>
          {this.name()}
        </li>
    );
  }
}

Person.propTypes = {
};

export default Person;
