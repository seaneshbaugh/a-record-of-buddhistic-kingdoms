import { initialState } from "./selectors";
import { MAP_SET_CURRENT_PLACE, MAP_SET_MAP_INSTANCE } from "./actions";

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
  case MAP_SET_CURRENT_PLACE:
    return {
      ...state,
      currentPlace: payload.placeIndex
    };
  case MAP_SET_MAP_INSTANCE:
    return {
      ...state,
      mapInstance: payload.mapInstance
    };
  default:
    return state;
  }
};
