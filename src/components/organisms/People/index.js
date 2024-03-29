import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { stringOrLanguageProps, linkProps } from "../../../utils/common-prop-types";
import ListItem from "../../atoms/ListItem";
import Person from "../../../containers/Person";
import styles from "./index.module.css";

class People extends Component {
  render() {
    const className = classNames(this.props.className, styles.people);

    const people = this.props.people.map((person, index) => {
      const onClick = () => (this.props.setCurrentPerson(index));

      const personClassName = classNames(styles.person, { [styles.active]: index === this.props.currentPerson });

      return <ListItem text={person.name} onClick={onClick} key={index.toString()} className={personClassName} />;
    });

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
      biography: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
      reference: PropTypes.object.isRequired,
      links: PropTypes.arrayOf(linkProps)
    })
  ),
  note: PropTypes.string
};

export default People;
