import { initialState } from "./selectors";
import { MAP_SET_CURRENT_PLACE } from "./actions";

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
  case MAP_SET_CURRENT_PLACE:
    return {
      ...state,
      currentPlace: payload.placeIndex
    };
  default:
    return state;
  }
};
