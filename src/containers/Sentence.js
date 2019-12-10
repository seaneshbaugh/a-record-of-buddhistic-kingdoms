import React, { Component } from "react";
import { connect } from "react-redux";
import Sentence from "../components/atoms/Sentence";
import { bookSetCurrentFootnote } from "../store/actions";

class SentenceContainer extends Component {
  render() {
    const { text, setCurrentFootnote } = this.props;

    return (
      <Sentence {...{ text, setCurrentFootnote } } />
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentFootnote: (newFootnoteIndex) => {
    return dispatch(bookSetCurrentFootnote(newFootnoteIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceContainer);
