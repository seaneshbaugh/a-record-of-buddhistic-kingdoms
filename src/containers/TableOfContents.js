import React, { Component } from "react";
import { connect } from "react-redux";
import TableOfContents from "../components/organisms/TableOfContents";
import { bookSetCurrentChapter } from "../store/actions";
import { bookCurrentChapter } from "../store/selectors";

class TableOfContentsContainer extends Component {
  render() {
    const { className, chapters, currentChapter, setCurrentChapter } = this.props;

    return (
      <TableOfContents {...{ className, chapters, currentChapter, setCurrentChapter } } />
    );
  }
}

const mapStateToProps = (state) => ({
  chapters: state.book.content.chapters,
  currentChapter: bookCurrentChapter(state.book)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChapter: (newChapter) => {
    return dispatch(bookSetCurrentChapter(newChapter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContentsContainer);
