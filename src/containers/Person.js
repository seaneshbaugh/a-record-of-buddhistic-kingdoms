import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/molecules/Person";
import { displayValue } from "../store/selectors";

class PersonContainer extends Component {
  render() {
    const { className, forwardedRef, name, nonRomanizedName, title, appearance, biography, links } = this.props;

    return (
      <Person {...{ className, forwardedRef, name, nonRomanizedName, title, appearance, biography, links } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: displayValue(state.display, ownProps.name),
  title: displayValue(state.display, ownProps.title)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PersonContainer);
