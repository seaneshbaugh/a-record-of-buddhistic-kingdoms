export const BOOK_SET_CURRENT_CHAPTER = 'BOOK_CURRENT_CHAPTER';

export const bookSetCurrentChapter = (chapterIndex) => ({
  type: BOOK_SET_CURRENT_CHAPTER,
  payload: {
    chapterIndex
  }
});
