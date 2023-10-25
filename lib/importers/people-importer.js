const XLSX = require("xlsx");
const BaseImporter = require("./base-importer.js");

const SHEET_NAME = "People";
const ID_KEY = "ID";
const NAME_KEY_MAP = {
  "Name : Legge": "legge",
  "Name : Modern": "modern"
};
const NON_ROMANIZRD_NAME_KEY_MAP = {
  "Non-Romanized Name : Chinese (Traditional)": "chineseTraditional",
  "Non-Romanized Name : Chinese (Simplified)": "chineseSimplified",
  "Non-Romanized Name : Brahmi": "brahmi",
  "Non-Romanized Name : Japanese": "japanese"
};
const SORT_NAME_KEY = "Sort Name";
const TITLE_KEY_MAP = {
  "Title : Legge": "legge",
  "Title : Modern": "modern"
};
const BIOGRAPHY_KEY_MAP = {
  "Biography : Legge": "legge",
  "Biography : Modern": "modern"
};
const LINK_KEYS = [
  "Link 1",
  "Link 2",
  "Link 3"
];
const REFERENCE_KEY_MAP = {
  "Chapter": "chapter",
  "Paragraph": "paragraph",
  "Sentence": "sentence",
  "Footnote": "footnote"
};
const CONFIDENCE_KEY = "Confidence";
const NOTES_KEY = "Notes";

class PeopleImporter extends BaseImporter {
  mapLinks(row) {
    return LINK_KEYS.map((key) => this.mapLink(row[key])).filter(Boolean);
  }

  rowAsJSON(row) {
    const json = {};

    json["id"] = row[ID_KEY]?.v;
    json["name"] = this.displayValueObject(row, NAME_KEY_MAP);
    json["nonRomanizedName"] = this.displayValueObject(row, NON_ROMANIZRD_NAME_KEY_MAP);
    json["sortName"] = row[SORT_NAME_KEY]?.v;
    json["title"] = this.displayValueObject(row, TITLE_KEY_MAP);
    json["links"] = this.mapLinks(row);
    json["reference"] = this.mapReference(row, REFERENCE_KEY_MAP);
    json["confidence"] = row[CONFIDENCE_KEY]?.v;
    json["notes"] = row[NOTES_KEY]?.v;

    return json;
  }

  sheetName() {
    return SHEET_NAME;
  }
}

module.exports = PeopleImporter;
