export const initialState = {
  currentChapter: 0
};

export const bookCurrentChapter = (state = initialState) => (state.currentChapter || initialState.currentChapter);
