import React, { Component } from "react";
import { connect } from "react-redux";
import Place from "../components/molecules/Place";
import { displayValue } from "../store/selectors";

class PlaceContainer extends Component {
  render() {
    const { className, forwardedRef, name } = this.props;

    return (
      <Place {...{ className, forwardedRef, name } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: displayValue(state.display, ownProps.name)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PlaceContainer);
