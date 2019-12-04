import content from "../../data/book";

export const initialState = {
  content,
  currentChapter: 1
};

export const bookCurrentChapter = (state = initialState) => {
  if (state.currentChapter || state.currentChapter === 0) {
    return state.currentChapter;
  } else {
    return initialState.currentChapter;
  }
};
