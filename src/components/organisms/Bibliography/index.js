import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import BibliographyEntry from "../../molecules/BibliographyEntry";
import styles from "./index.module.css";

class Bibliography extends Component {
  render() {
    const className = classNames(this.props.className, styles.bibliography);

    const entries = this.props.entries.map((entry, index) => (<BibliographyEntry {...entry} key={index} />));

    return (
      <div className={className}>
        {entries}
      </div>
    )
  }
}

Bibliography.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      authors: PropTypes.arrayOf(
        PropTypes.shape({
          firstName: PropTypes.string,
          middleName: PropTypes.string,
          lastName: PropTypes.string.isRequired
        })
      ),
      editors: PropTypes.arrayOf(
        PropTypes.shape({
          firstName: PropTypes.string,
          middleName: PropTypes.string,
          lastName: PropTypes.string.isRequired
        })
      ),
      compilers: PropTypes.arrayOf(
        PropTypes.shape({
          firstName: PropTypes.string,
          middleName: PropTypes.string,
          lastName: PropTypes.string.isRequired
        })
      ),
      translators: PropTypes.arrayOf(
        PropTypes.shape({
          firstName: PropTypes.string,
          middleName: PropTypes.string,
          lastName: PropTypes.string.isRequired
        })
      ),
      title: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      location: PropTypes.arrayOf(PropTypes.string).isRequired,
      year: PropTypes.string.isRequired,
      edition: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export default Bibliography;
