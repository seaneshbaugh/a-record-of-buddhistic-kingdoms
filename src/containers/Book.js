import React, { Component } from "react";
import { connect } from "react-redux";
import Book from "../components/organisms/Book";
import { bookSetCurrentChapter } from "../store/actions";
import { bookCurrentChapter } from "../store/selectors";

class BookContainer extends Component {
  render() {
    const { chapters, currentChapter, setCurrentChapter } = this.props;

    return (
      <Book {...{ chapters, currentChapter, setCurrentChapter } } />
    );
  }
}

const mapStateToProps = (state) => ({
  currentChapter: bookCurrentChapter(state.book)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChapter: (newChapter) => {
    return dispatch(bookSetCurrentChapter(newChapter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
