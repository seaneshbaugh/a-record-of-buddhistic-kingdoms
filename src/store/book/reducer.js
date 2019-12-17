import { initialState } from "./selectors";
import { BOOK_SET_CURRENT_CHAPTER, BOOK_SET_CURRENT_FOOTNOTE } from "./actions";

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
  case BOOK_SET_CURRENT_CHAPTER:
    return {
      ...state,
      currentChapter: payload.chapterIndex,
      currentFootnote: null
    };
  case BOOK_SET_CURRENT_FOOTNOTE:
    return {
      ...state,
      currentFootnote: payload.footnoteIndex
    };
  default:
    return state;
  }
};
