import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/molecules/Person";
import { displayValue } from "../store/selectors";

class PersonContainer extends Component {
  render() {
    const { name, title, appearance, forwardedRef } = this.props;

    return (
      <Person name={name} title={title} appearance={appearance} forwardedRef={forwardedRef} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: displayValue(state.display, ownProps.name),
  title: displayValue(state.display, ownProps.title)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PersonContainer);
