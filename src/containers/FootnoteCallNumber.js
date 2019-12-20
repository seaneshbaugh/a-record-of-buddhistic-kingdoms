import React, { Component } from "react";
import { connect } from "react-redux";
import FootnoteCallNumber from "../components/atoms/FootnoteCallNumber";
import { bookSetCurrentFootnote } from "../store/actions";

class FootnoteCallNumberContainer extends Component {
  render() {
    const { footnoteNumber, setCurrentFootnote } = this.props;

    return (
      <FootnoteCallNumber {...{ footnoteNumber, setCurrentFootnote } } />
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentFootnote: (newFootnoteIndex) => {
    return dispatch(bookSetCurrentFootnote(newFootnoteIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FootnoteCallNumberContainer);
