import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Sentence from "../../../containers/Sentence";
import styles from "./index.module.css";

class Paragraph extends Component {
  render() {
    const className = classNames(styles.paragraph, this.props.className);

    const sentences = this.props.sentences.map((sentence, index) => {
      return <Sentence text={sentence} key={(index + 1).toString()} />;
    }).reduce((memo, sentence, index) => {
      memo.push(sentence);

      if (index !== this.props.sentences.length - 1) {
        memo.push(" ");
      }

      return memo;
    }, []);

    return (
      <p className={className}>
        {sentences}
      </p>
    );
  }
}

Paragraph.propTypes = {
  className: PropTypes.string,
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Paragraph;
