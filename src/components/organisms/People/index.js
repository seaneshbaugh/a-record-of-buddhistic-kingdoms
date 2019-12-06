import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Person from "../../molecules/Person";
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
};

export default People;
