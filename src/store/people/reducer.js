import { initialState } from "./selectors";
import { PEOPLE_SET_CURRENT_PERSON } from "./actions";

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
  case PEOPLE_SET_CURRENT_PERSON:
    return {
      ...state,
      currentPerson: payload.personIndex
    };
  default:
    return state;
  }
};
