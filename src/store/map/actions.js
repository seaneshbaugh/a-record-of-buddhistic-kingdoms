export const MAP_SET_CURRENT_PLACE = "MAP_SET_CURRENT_PLACE";
export const MAP_SET_MAP_INSTANCE = "MAP_SET_MAP_INSTANCE";

export const mapSetCurrentPlace = (placeIndex) => ({
  type: MAP_SET_CURRENT_PLACE,
  payload: {
    placeIndex
  }
});

export const mapSetMapInstance = (mapInstance) => ({
  type: MAP_SET_MAP_INSTANCE,
  payload: {
    mapInstance
  }
});
