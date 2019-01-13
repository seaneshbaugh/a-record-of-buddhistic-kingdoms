import React, { Component } from "react";
import Chapter from "../../molecules/Chapter";
import styles from "./index.module.css";

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
