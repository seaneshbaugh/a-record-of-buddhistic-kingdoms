import React, { Component } from "react";
import { connect } from "react-redux";
import HomePage from "../components/pages/HomePage";
import { bookCurrentFootnote } from "../store/selectors";

class HomePageContainer extends Component {
  render() {
    const { className, title, currentFootnote } = this.props;

    return (
      <HomePage {...{ className, title, currentFootnote } } />
    );
  }
}

const mapStateToProps = (state) => ({
  currentFootnote: bookCurrentFootnote(state.book)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
