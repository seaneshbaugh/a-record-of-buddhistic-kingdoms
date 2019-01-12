import React, { Component } from "react";
import Chapter from "./Book/Chapter";
import "./Book.css";

class Book extends Component {
  render() {
    const chapters = this.props.chapters.map((chapter, index) => {
      return (<Chapter {...chapter} key={(index + 1).toString()} />);
    });

    return (
      <div className="book">
        {chapters[this.props.currentChapter]}
      </div>
    );
  }
}

export default Book;
