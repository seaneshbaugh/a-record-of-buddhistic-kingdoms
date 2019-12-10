import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const FOOTNOTE_REFERENCE_REGEX = /(\[\d\d?\])/;

// TODO: Maybe make Sentences be a molecule.
class Sentence extends Component {
  constructor(props) {
    super(props);

    this.handleFootnoteReferenceClick = this.handleFootnoteReferenceClick.bind(this);
  }

  handleFootnoteReferenceClick(footnoteIndex) {
    this.props.setCurrentFootnote(footnoteIndex);
  }

  text() {
    const parts = this.props.text.split(FOOTNOTE_REFERENCE_REGEX);

    if (parts.length == 1) {
      return this.props.text;
    }

    return parts.map((part, index) => {
      if (FOOTNOTE_REFERENCE_REGEX.exec(part)) {
        const onClick = (event) => {
          const footnoteNumber = parseInt(/\[(\d\d?)\]/.exec(part)[1]);

          this.handleFootnoteReferenceClick(footnoteNumber - 1);
        };

        return <span className={styles.footnoteReference} onClick={onClick} key={index}>{part}</span>;
      } else {
        return part;
      }
    });
  }

  render() {
    return (
      <span className={styles.sentence}>
        {this.text()}
      </span>
    );
  }
}

Sentence.propTypes = {
  text: PropTypes.string,
  setCurrentFootnote: PropTypes.func.isRequired
};

export default Sentence;
