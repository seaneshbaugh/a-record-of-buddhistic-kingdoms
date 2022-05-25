import places from "../../data/places";

export const initialState = {
  places,
  currentPlace: 0,
  mapInstance: null
};

export const mapCurrentPlace = (state = initialState) => {
  if (state.currentPlace || state.currentPlace === 0) {
    return state.currentPlace;
  } else {
    return initialState.currentPlace;
  }
};

export const mapMapInstance = (state = initialState) => {
  return state.mapInstance;
};
