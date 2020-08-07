export const DISPLAY_LANGUAGE_LEGGE = "legge";
export const DISPLAY_LANGUAGE_MODERN = "modern";
export const DISPLAY_LANGUAGE_PALI = "pali";
export const DISPLAY_LANGUAGE_SANSKRIT = "sanskrit";
export const DISPLAY_LANGUAGE_PINYIN_WITH_ACCENTS = "pinyinWithAccents";
export const DISPLAY_LANGUAGE_PINYIN = "pinyin";
export const DISPLAY_LANGUAGE_ROMAJI = "romaji";
export const DISPLAY_LANGUAGE_WADE_GILES = "wadeGiles";
export const DISPLAY_LANGUAGE_TRADITIONAL_CHINESE = "tranditionalChinese";
export const DISPLAY_LANGUAGE_SIMPLIFIED_CHINESE = "simplifiedChinese";
export const DISPLAY_LANGUAGE_JAPANESE = "japanese";
export const DISPLAY_LANGUAGE_TAJIK = "tajik";

export const languagePrecedence = [
  DISPLAY_LANGUAGE_LEGGE,
  DISPLAY_LANGUAGE_MODERN,
  DISPLAY_LANGUAGE_PALI,
  DISPLAY_LANGUAGE_SANSKRIT,
  DISPLAY_LANGUAGE_PINYIN_WITH_ACCENTS,
  DISPLAY_LANGUAGE_PINYIN,
  DISPLAY_LANGUAGE_ROMAJI,
  DISPLAY_LANGUAGE_WADE_GILES,
  DISPLAY_LANGUAGE_TRADITIONAL_CHINESE,
  DISPLAY_LANGUAGE_SIMPLIFIED_CHINESE,
  DISPLAY_LANGUAGE_JAPANESE,
  DISPLAY_LANGUAGE_TAJIK
];

export const languageLabels = {
  [DISPLAY_LANGUAGE_LEGGE]: "Legge",
  // [DISPLAY_LANGUAGE_MODERN]: "Modern",
  // [DISPLAY_LANGUAGE_PALI]: "Pāḷi",
  // [DISPLAY_LANGUAGE_SANSKRIT]: "Sanskrit",
  [DISPLAY_LANGUAGE_PINYIN_WITH_ACCENTS]: "Pinyin",
  // [DISPLAY_LANGUAGE_PINYIN]: "Pinyin",
  // [DISPLAY_LANGUAGE_ROMAJI]: "Rōmaji",
  [DISPLAY_LANGUAGE_WADE_GILES]: "Wade-Giles",
  // [DISPLAY_LANGUAGE_TRADITIONAL_CHINESE]: "Traditional Chinese",
  // [DISPLAY_LANGUAGE_SIMPLIFIED_CHINESE]: "Simplified Chinese",
  // [DISPLAY_LANGUAGE_JAPANESE]: "Japanese",
  // [DISPLAY_LANGUAGE_TAJIK]: "Tajik"
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
