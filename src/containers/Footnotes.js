import React, { Component } from "react";
import { connect } from "react-redux";
import Footnotes from "../components/organisms/Footnotes";
import { bookSetCurrentFootnote } from "../store/actions";
import { bookCurrentChapter, bookCurrentFootnote } from "../store/selectors";

class FootnotesContainer extends Component {
  render() {
    const { className, footnotes, currentChapter, currentFootnote, setCurrentFootnote } = this.props;

    return (
      <Footnotes {...{ className, footnotes, currentChapter, currentFootnote, setCurrentFootnote } } />
    );
  }
}

const mapStateToProps = (state) => ({
  footnotes: state.book.content.chapters[bookCurrentChapter(state.book)].footnotes,
  currentChapter: bookCurrentChapter(state),
  currentFootnote: bookCurrentFootnote(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentFootnote: (newFootnoteIndex) => {
    return dispatch(bookSetCurrentFootnote(newFootnoteIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FootnotesContainer);
