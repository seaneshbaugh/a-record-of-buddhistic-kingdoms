import places from "../../data/places";

export const initialState = {
  places,
  currentPlace: 0
};

export const mapCurrentPlace = (state = initialState) => {
  if (state.currentPlace || state.currentPlace === 0) {
    return state.currentPlace;
  } else {
    return initialState.currentPlace;
  }
};
