export const MAP_SET_CURRENT_PLACE = "MAP_SET_CURRENT_PLACE";

export const mapSetCurrentPlace = (placeIndex) => ({
  type: MAP_SET_CURRENT_PLACE,
  payload: {
    placeIndex
  }
});
