import React, { Component } from "react";
import { connect } from "react-redux";
import Place from "../components/molecules/Place";
import { mapSetCurrentPlace } from "../store/actions";
import { mapCurrentPlace, displayValue } from "../store/selectors";

class PlaceContainer extends Component {
  render() {
    const { className, forwardedRef, place } = this.props;

    return (
      <Place {...{ className, forwardedRef, ...place } } />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const place = state.map.places[mapCurrentPlace(state.map)];

  return {
    place: {
      ...place,
      name: displayValue(state.display, place.name)
    }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentPlace: (newPlaceIndex) => {
    return dispatch(mapSetCurrentPlace(newPlaceIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PlaceContainer);
