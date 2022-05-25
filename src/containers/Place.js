import React, { Component } from "react";
import { connect } from "react-redux";
import Place from "../components/molecules/Place";
import { mapSetCurrentPlace } from "../store/actions";
import { displayValue, mapMapInstance } from "../store/selectors";

class PlaceContainer extends Component {
  render() {
    const { className, current, forwardedRef, index, name, lat, lng, setCurrentPlace, mapInstance } = this.props;

    return (
      <Place {...{ className, current, forwardedRef, index, name, lat, lng, setCurrentPlace, mapInstance } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: displayValue(state.display, ownProps.name),
  mapInstance: mapMapInstance(state.map)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentPlace: (newPlaceIndex) => {
    return dispatch(mapSetCurrentPlace(newPlaceIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PlaceContainer);
