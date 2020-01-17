import { initialState } from "./selectors";
import { DISPLAY_SET_CURRENT_LANGUAGE } from "./actions";

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
  case DISPLAY_SET_CURRENT_LANGUAGE:
    return {
      ...state,
      currentLanguage: payload.language
    };
  default:
    return state;
  }
};
