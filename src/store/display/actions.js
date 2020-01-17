export const DISPLAY_SET_CURRENT_LANGUAGE = "DISPLAY_SET_CURRENT_LANGUAGE";

export const displaySetCurrentLanguage = (language) => ({
  type: DISPLAY_SET_CURRENT_LANGUAGE,
  payload: {
    language
  }
});
