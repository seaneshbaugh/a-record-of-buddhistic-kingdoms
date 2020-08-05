import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { linkProps } from "../../../utils/common-prop-types";
import styles from "./index.module.css";

class Person extends Component {
  render() {
    const className = classNames(this.props.className, styles.person);

    return (
      <div className={className}>
        <h2 className={styles.name}>{this.props.name}</h2>
        <h3 className={styles.title}>{this.props.title}</h3>
        <p className={styles.appearance}>{this.props.appearance}</p>
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  appearance: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(linkProps)
};

export default Person;
