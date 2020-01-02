import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "../components/organisms/Map";
import { mapSetCurrentPlace } from "../store/actions";
import { mapCurrentPlace } from "../store/selectors";

class MapContainer extends Component {
  render() {
    const { className, places, currentPlace, setCurrentPlace } = this.props;

    return (
      <Map {...{ className, places, currentPlace, setCurrentPlace } } />
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.map.places,
  currentPlace: mapCurrentPlace(state.map)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentPlace: (newPlaceIndex) => {
    return dispatch(mapSetCurrentPlace(newPlaceIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
