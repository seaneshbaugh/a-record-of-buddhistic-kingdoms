import content from "../../data/book";

// currentFootnote is scoped to the current chapter. This means that changing the chapter
// will need reset currentFootnote to null. It might make more sense to make
// currentFootnote a tuple with the chapter and foonote so that way if the current chapter
// is not equal to the first part of the tuple the annotations pane is not displayed. I'm
// not sure if I like that either though.

export const initialState = {
  content,
  currentChapter: 1,
  currentFootnote: null
};

export const bookCurrentChapter = (state = initialState) => {
  if (state.currentChapter || state.currentChapter === 0) {
    return state.currentChapter;
  } else {
    return initialState.currentChapter;
  }
};

export const bookCurrentFootnote = (state = initialState) => {
  return state.currentFootnote;
};
