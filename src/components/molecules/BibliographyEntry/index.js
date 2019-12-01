import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const formatName = (person, lastNameFirst = true) => {
  if (person.firstName) {
    if (person.middleName) {
      if (lastNameFirst) {
        return `${person.lastName}, ${person.firstName} ${person.middleName}`;
      } else {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
      }
    } else {
      if (lastNameFirst) {
        return `${person.lastName}, ${person.firstName}`;
      } else {
        return `${person.firstName} ${person.lastName}`;
      }
    }
  } else {
    return person.lastName;
  }
};

const formatNames = (people) => {
  if (!people || people.length === 0) {
    return null;
  }

  if (people.length == 1) {
    return formatName(people[0]);
  } else {
    if (people.length === 2) {
      return `${formatName(people[0])} and ${formatName(people[1], false)}`;
    } else {
      if (people.length > 2) {
        return `${formatName(people[0])}, et al`;
      }
    }
  }
};

class BibliographyEntry extends Component {
  render() {
    const className = classNames(this.props.className, styles.bibliographyEntry);

    let citation = [];

    const authors = formatNames(this.props.authors);

    if (authors) {
      citation.push(<span className={styles.authors} key="author">{authors}</span>);
      citation.push(". ");
    }

    citation.push(<span className={styles.title} key="title">{this.props.title}</span>);
    citation.push(". ");

    const editors = formatNames(this.props.editors);

    if (editors) {
      citation.push(<span className={styles.editors} key="editors">{`Edited by ${editors}`}</span>);
      citation.push(", ");
    }

    const compilers = formatNames(this.props.compilers);

    if (compilers) {
      citation.push(<span className={styles.compilers} key="compilers">{`Compiled by ${compilers}`}</span>);
      citation.push(", ");
    }

    const translators = formatNames(this.props.translators);

    if (translators) {
      citation.push(<span className={styles.translators} key="translators">{`Translated by ${translators}`}</span>);
      citation.push(", ");
    }

    if (this.props.edition) {
      citation.push(<span className={styles.edition} key="edition">{`${this.props.edition} ed.`}</span>);
      citation.push(", ");
    }

    citation.push(<span className={styles.publisher} key="publisher">{this.props.publisher}</span>);
    citation.push(", ");

    citation.push(<span className={styles.year} key="year">{this.props.year}</span>);
    citation.push(".");

    return (
      <div className={className}>
        {citation}
      </div>
    );
  }
}


//  Eitel, Ernest J. Hand-Book of Chinese Buddhism: Being a Sanskrit-Chinese Dictionary with Vocabularies of Buddhist Terms in Pali, Singhalese, Siamese, Burmese, Tibetan, Mongolian and Japanese. Second ed., Sanshusha, 1870.
export default BibliographyEntry;
