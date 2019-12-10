export const BOOK_SET_CURRENT_CHAPTER = "BOOK_SET_CURRENT_CHAPTER";
export const BOOK_SET_CURRENT_FOOTNOTE = "BOOK_SET_CURRENT_FOOTNOTE";

export const bookSetCurrentChapter = (chapterIndex) => ({
  type: BOOK_SET_CURRENT_CHAPTER,
  payload: {
    chapterIndex
  }
});

export const bookSetCurrentFootnote = (footnoteIndex) => ({
  type: BOOK_SET_CURRENT_FOOTNOTE,
  payload: {
    footnoteIndex
  }
});
