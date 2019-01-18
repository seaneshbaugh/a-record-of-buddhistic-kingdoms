import React, { Component } from "react";
import PropTypes from "prop-types";
import Sentence from "../../atoms/Sentence";
import styles from "./index.module.css";

class Paragraph extends Component {
  render() {
    const sentences = this.props.sentences.map((sentence, index) => {
      return (<Sentence text={sentence} key={(index + 1).toString()} />);
    }).reduce((memo, sentence, index) => {
      memo.push(sentence);

      if (index !== this.props.sentences.length - 1) {
        memo.push(" ");
      }

      return memo;
    }, []);

    return (
      <p className={styles.paragraph}>
        {sentences}
      </p>
    );
  }
}

Paragraph.propTypes = {
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Paragraph;
