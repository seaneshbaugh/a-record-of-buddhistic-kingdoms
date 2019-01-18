import React, { Component } from "react";
import PropTypes from "prop-types";
import Paragraph from "../../molecules/Paragraph";
import styles from "./index.module.css";

class Chapter extends Component {
  render() {
    const paragraphs = this.props.content.paragraphs.map((paragraph, index) => {
      return (<Paragraph {...paragraph} key={(index + 1).toString()} />);
    });

    return (
      <div className={styles.chapter}>
        <h1 className={styles.title}>{this.props.title}</h1>
        <h2 className={styles.subtitle}>{this.props.subtitle}</h2>
        <div className={styles.contents}>
          {paragraphs}
        </div>
      </div>
    );
  }
}

Chapter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.shape({
    paragraphs: PropTypes.arrayOf(
      PropTypes.shape({
        sentences: PropTypes.arrayOf(PropTypes.string).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default Chapter;
