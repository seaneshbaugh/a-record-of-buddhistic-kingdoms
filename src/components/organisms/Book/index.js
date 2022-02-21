import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Chapter from "../../molecules/Chapter";
import styles from "./index.module.css";

class Book extends Component {
  constructor(props) {
    super(props);

    this.handlePreviousChapterClick = this.handlePreviousChapterClick.bind(this);
    this.handleNextChapterClick = this.handleNextChapterClick.bind(this);
  }

  handlePreviousChapterClick(event) {
    this.props.setCurrentChapter(this.props.currentChapter - 1);
  }

  handleNextChapterClick(event) {
    this.props.setCurrentChapter(this.props.currentChapter + 1);
  }

  render() {
    const className = classNames(this.props.className, styles.book);

    const currentChapter = <Chapter {...this.props.chapters[this.props.currentChapter]} />;

    return (
      <div className={className}>
        {currentChapter}
        {this.props.currentChapter > 0 &&
          <button className={styles.button} onClick={this.handlePreviousChapterClick}>Previous Chapter</button>
        }
        {this.props.currentChapter < this.props.chapters.length - 1 &&
          <button className={styles.button} onClick={this.handleNextChapterClick}>Next Chapter</button>
        }
      </div>
    );
  }
}

Book.propTypes = {
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      content: PropTypes.shape({
        paragraphs: PropTypes.arrayOf(
          PropTypes.shape({
            sentences: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired
          }).isRequired
        ).isRequired
      }).isRequired,
      footnotes: PropTypes.arrayOf(
        PropTypes.shape({
          paragraphs: PropTypes.arrayOf(
            PropTypes.shape({
              sentences: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired,
  currentChapter: PropTypes.number.isRequired,
  setCurrentChapter: PropTypes.func.isRequired
};

export default Book;
