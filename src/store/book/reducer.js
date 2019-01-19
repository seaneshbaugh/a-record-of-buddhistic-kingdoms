import { initialState } from "./selectors";
import { BOOK_SET_CURRENT_CHAPTER } from "./actions";

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
  case BOOK_SET_CURRENT_CHAPTER:
    return {
      ...state,
      currentChapter: payload.chapterIndex
    };
  default:
    return state;
  }
};
