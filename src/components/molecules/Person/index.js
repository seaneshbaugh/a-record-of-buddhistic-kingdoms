import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { linkProps } from "../../../utils/common-prop-types";
import styles from "./index.module.css";

class Person extends Component {
  render() {
    const className = classNames(this.props.className, styles.person);

    return (
      <li className={className}>
        {this.props.name}
      </li>
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
