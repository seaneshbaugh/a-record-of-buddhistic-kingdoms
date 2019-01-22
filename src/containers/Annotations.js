import React, { Component } from "react";
import { connect } from "react-redux";
import Annotations from "../components/organisms/Annotations";
import { bookCurrentChapter } from "../store/selectors";

class AnnotationsContainer extends Component {
  render() {
    const { className, footnotes, currentChapter } = this.props;

    return (
      <Annotations {...{ className, footnotes, currentChapter } } />
    );
  }
}

const mapStateToProps = (state) => ({
  footnotes: state.book.content.chapters[bookCurrentChapter(state.book)].footnotes,
  currentChapter: bookCurrentChapter(state)
});

export default connect(mapStateToProps, null)(AnnotationsContainer);
