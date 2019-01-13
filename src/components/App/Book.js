import React, { Component } from "react";
import Chapter from "./Book/Chapter";
import styles from "./Book.module.css";

class Book extends Component {
  render() {
    const chapters = this.props.chapters.map((chapter, index) => {
      return (<Chapter {...chapter} key={(index + 1).toString()} />);
    });

    return (
      <div className={styles.book}>
        {chapters[this.props.currentChapter]}
      </div>
    );
  }
}

export default Book;
