export const DISPLAY_LANGUAGE_LEGGE = "legge";
export const DISPLAY_LANGUAGE_MODERN = "modern";

export const languagePrecedence = [
  DISPLAY_LANGUAGE_LEGGE,
  DISPLAY_LANGUAGE_MODERN
];

export const languageLabels = {
  [DISPLAY_LANGUAGE_LEGGE]: "Legge",
  [DISPLAY_LANGUAGE_MODERN]: "Modern"
};

export const initialState = {
  currentLanguage: DISPLAY_LANGUAGE_LEGGE
};

export const displayCurrentLanguage = (state = initialState) => {
  return state.currentLanguage;
};

export const displayValue = (state = initialState, value) => {
  if (value === undefined || value === null) {
    return value;
  }

  const type = typeof value;

  if (type === "string") {
    return value;
  }

  if (type !== "object") {
    throw new Error(`Expected string or object but got ${type}`);
  }

  if (value.hasOwnProperty(state.currentLanguage)) {
    return value[state.currentLanguage];
  }

  const values = languagePrecedence.map((language) => value[language]).filter((v) => v);

  if (values.length === 0) {
    throw new Error("No display language properties found on object.");
  }

  return values[0];
};
