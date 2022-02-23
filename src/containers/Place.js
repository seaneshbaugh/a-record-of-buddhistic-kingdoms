import React, { Component } from "react";
import { connect } from "react-redux";
import Place from "../components/molecules/Place";
import { mapSetCurrentPlace } from "../store/actions";
import { displayValue } from "../store/selectors";

class PlaceContainer extends Component {
  render() {
    const { className, current, forwardedRef, index, name, setCurrentPlace } = this.props;

    return (
      <Place {...{ className, current, forwardedRef, index, name, setCurrentPlace } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: displayValue(state.display, ownProps.name)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentPlace: (newPlaceIndex) => {
    return dispatch(mapSetCurrentPlace(newPlaceIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PlaceContainer);
