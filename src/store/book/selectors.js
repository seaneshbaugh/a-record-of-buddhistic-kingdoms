import content from "../../data/book";

export const initialState = {
  content,
  currentChapter: 0
};

export const bookCurrentChapter = (state = initialState) => (state.currentChapter || initialState.currentChapter);
