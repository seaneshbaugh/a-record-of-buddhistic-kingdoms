import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "../components/organisms/Map";
import { mapSetCurrentPlace, mapSetMapInstance } from "../store/actions";
import { mapCurrentPlace, mapMapInstance, displayValue } from "../store/selectors";

class MapContainer extends Component {
  render() {
    const { className, places, currentPlace, setCurrentPlace, mapInstance, setMapInstance } = this.props;

    return (
      <Map {...{ className, places, currentPlace, setCurrentPlace, mapInstance, setMapInstance } } />
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
  },
  setMapInstance: (newMapInstance) => {
    return dispatch(mapSetMapInstance(newMapInstance));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
