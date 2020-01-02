import React, { Component } from "react";
import { connect } from "react-redux";
import Places from "../components/organisms/Places";
import { mapSetCurrentPlace } from "../store/actions";
import { mapCurrentPlace } from "../store/selectors";

class PlacesContainer extends Component {
  render() {
    const { className, places, currentPlace, setCurrentPlace } = this.props;
    console.log(this.props);
    return (
      <Places {...{ className, places, currentPlace, setCurrentPlace } } />
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.map.places,
  currentPlaces: mapCurrentPlace(state.map)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentPlace: (newPlaceIndex) => {
    return dispatch(mapSetCurrentPlace(newPlaceIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer);
