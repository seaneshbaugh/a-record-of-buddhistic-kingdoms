import React, { Component } from "react";
import PropTypes from "prop-types";
import Chapter from "../../molecules/Chapter";
import styles from "./index.module.css";

class Book extends Component {
  constructor(props) {
    super(props);

    this.handleNextChapterClick = this.handleNextChapterClick.bind(this);
  }

  handleNextChapterClick(event) {
    this.props.setCurrentChapter(this.props.currentChapter + 1);
  }

  render() {
    const chapters = this.props.chapters.map((chapter, index) => {
      return (<Chapter {...chapter} key={(index + 1).toString()} />);
    });

    return (
      <div className={styles.book}>
        {chapters[this.props.currentChapter]}
        <button onClick={this.handleNextChapterClick}>Next Chapter</button>
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
            sentences: PropTypes.arrayOf(PropTypes.string).isRequired
          }).isRequired
        ).isRequired
      }).isRequired,
      footnotes: PropTypes.arrayOf(
        PropTypes.shape({
          paragraphs: PropTypes.arrayOf(
            PropTypes.shape({
              sentences: PropTypes.arrayOf(PropTypes.string).isRequired
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
