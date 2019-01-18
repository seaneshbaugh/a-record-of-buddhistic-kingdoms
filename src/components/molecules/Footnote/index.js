import React, { Component } from "react";
import PropTypes from "prop-types";
import Paragraph from "../../molecules/Paragraph";
import styles from "./index.module.css";

class Footnote extends Component {
  render() {
    const paragraphs = this.props.paragraphs.map((paragraph, index) => {
      return (<Paragraph {...paragraph} key={(index + 1).toString()} />);
    });

    return (
      <div className={styles.footnote}>
        <span className={styles.index}>[{this.props.index}]</span>
        {paragraphs}
      </div>
    );
  }
}

Footnote.propTypes = {
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      sentences: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  ).isRequired
};

export default Footnote;
