import React, { Component } from "react";
import { connect } from "react-redux";
import Book from "../components/organisms/Book";
import { bookSetCurrentChapter, bookSetCurrentFootnote } from "../store/actions";
import { bookCurrentChapter, bookCurrentFootnote } from "../store/selectors";

class BookContainer extends Component {
  render() {
    const { className, chapters, currentChapter, setCurrentChapter, setCurrentFootnote } = this.props;

    return (
      <Book {...{ className, chapters, currentChapter, setCurrentChapter, setCurrentFootnote } } />
    );
  }
}

const mapStateToProps = (state) => ({
  chapters: state.book.content.chapters,
  currentChapter: bookCurrentChapter(state.book),
  currentFootnote: bookCurrentFootnote(state.book)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChapter: (newChapterIndex) => {
    return dispatch(bookSetCurrentChapter(newChapterIndex));
  },
  setCurrentFootnote: (newFootnoteIndex) => {
    return dispatch(bookSetCurrentFootnote(newFootnoteIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
