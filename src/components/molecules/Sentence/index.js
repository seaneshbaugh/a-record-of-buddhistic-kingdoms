import React, { Component } from "react";
import PropTypes from "prop-types";
import FootnoteCallNumber from "../../../containers/FootnoteCallNumber";
import styles from "./index.module.css";

const FOOTNOTE_CALL_NUMBER_SPLIT_REGEX = /(\[\d\d?\])/;
const FOOTNOTE_CALL_NUMBER_EXTRACT_REGEX = /\[(\d\d?)\]/;

class Sentence extends Component {
  text() {
    const parts = this.props.text.split(FOOTNOTE_CALL_NUMBER_SPLIT_REGEX);

    if (parts.length === 1) {
      return this.props.text;
    }

    return parts.map((part, index) => {
      const matches = part.match(FOOTNOTE_CALL_NUMBER_EXTRACT_REGEX);

      if (matches) {
        const footnoteNumber = parseInt(matches[1]);

        return <FootnoteCallNumber footnoteNumber={footnoteNumber} key={index} />;
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
  text: PropTypes.string
};

export default Sentence;
