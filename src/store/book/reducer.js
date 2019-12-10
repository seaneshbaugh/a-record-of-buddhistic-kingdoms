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
    console.log(BOOK_SET_CURRENT_FOOTNOTE, payload.footnoteIndex);
    return {
      ...state,
      currentFootnote: payload.foonoteIndex
    };
  default:
    return state;
  }
};
