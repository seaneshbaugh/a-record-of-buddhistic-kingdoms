import React, { Component } from "react";
import { connect } from "react-redux";
import Destination from "../components/atoms/Destination";
import { displayValue } from "../store/selectors";

class DestinationContainer extends Component {
  render() {
    const { className, name } = this.props;

    return (
      <Destination {...{ className, name } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: displayValue(state.display, ownProps.name)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(DestinationContainer);
