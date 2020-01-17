import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { stringOrLanguageProps, linkProps } from "../../../utils/common-prop-types";
import Person from "../../../containers/Person";
import styles from "./index.module.css";

class People extends Component {
  render() {
    const className = classNames(this.props.className, styles.people);

    const people = this.props.people.map((person, index) => (<Person {...person} key={index} />));

    return (
      <ul className={className}>
        {people}
      </ul>
    );
  }
}

People.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: stringOrLanguageProps.isRequired,
      title: stringOrLanguageProps,
      appearance: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(linkProps)
    })
  ),
  note: PropTypes.string
};

export default People;
