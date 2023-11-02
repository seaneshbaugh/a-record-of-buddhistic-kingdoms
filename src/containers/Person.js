import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/molecules/Person";
import { displayValue } from "../store/selectors";

class PersonContainer extends Component {
  render() {
    const { className, forwardedRef, name, nonRomanizedName, title, reference, biography, links } = this.props;

    return (
      <Person {...{ className, forwardedRef, name, nonRomanizedName, title, biography, reference, links } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: displayValue(state.display, ownProps.name),
  title: displayValue(state.display, ownProps.title),
  biography: displayValue(state.display, ownProps.biography),
  reference: {...ownProps.reference, text: displayValue(state.display, ownProps.reference.text) }
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PersonContainer);
