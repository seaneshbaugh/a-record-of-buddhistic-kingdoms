import React, { Component } from "react";
import { connect } from "react-redux";
import Places from "../components/organisms/Places";
import { mapSetCurrentPlace } from "../store/actions";
import { mapCurrentPlace, mapMapInstance, displayValue } from "../store/selectors";

class PlacesContainer extends Component {
  render() {
    const { className, places, currentPlace, mapInstance, setCurrentPlace } = this.props;

    return (
      <Places {...{ className, places, currentPlace, mapInstance, setCurrentPlace } } />
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.map.places.map((place) => (
    {
      ...place,
      name: displayValue(state.display, place.name)
    }
  )),
  currentPlace: mapCurrentPlace(state.map),
  mapInstance: mapMapInstance(state.map)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentPlace: (newPlaceIndex) => {
    return dispatch(mapSetCurrentPlace(newPlaceIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
