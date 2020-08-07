import React, { Component } from "react";
import { connect } from "react-redux";
import Sentence from "../components/molecules/Sentence";
import { displayValue } from "../store/selectors";

class SentenceContainer extends Component {
  render() {
    const { className, text } = this.props;

    return (
      <Sentence className={className} text={text} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  text: displayValue(state.display, ownProps.text)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceContainer);
