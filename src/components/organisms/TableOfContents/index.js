import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./index.module.css";

// TODO: Decompose this into molecules/atoms.
class TableOfContents extends Component {
  render() {
    const className = classNames(this.props.className, styles.tableOfContents);

    const chapters = this.props.chapters.map((chapter, index) => {
      const setChapter = () => {
        this.props.setCurrentChapter(index);
      };

      const chapterClassName = classNames(styles.chapter, { [styles.active]: index === this.props.currentChapter });

      return <li className={chapterClassName} key={index} onClick={setChapter} title={chapter.subtitle}>{chapter.title}</li>;
    });

    return (
      <div className={className}>
        <h2>Table of Contents</h2>
        <ul className={styles.chapters}>
          {chapters}
        </ul>
      </div>
    );
  }
}

TableOfContents.propTypes = {
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

export default TableOfContents;
