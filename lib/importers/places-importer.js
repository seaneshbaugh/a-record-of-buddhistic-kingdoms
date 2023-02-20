const XLSX = require("xlsx");

const SHEET_NAME = "Places";
const NAME_KEY_MAP = {
  "Name : Legge": "legge",
  "Name : Modern": "modern"
};
const NON_ROMANIZRD_NAME_KEY_MAP = {
  "Non-Romanized Name : Chinese (Traditional)": "chineseTraditional",
  "Non-Romanized Name : Chinese (Simplified)": "chineseSimplified",
  "Non-Romanized Name : Other": "other"
};
const POSITION_KEY_MAP = {
  "Lat": "lat",
  "Lng": "lng"
};

class PlacesImporter {
  constructor(workbook) {
    this.workbook = workbook;
    this.sheet = this.workbook.Sheets[SHEET_NAME];
    this.result = [];
  }

  parse() {
    const range = XLSX.utils.decode_range(this.sheet["!ref"]);

    const headers = [];

    for (let colNumber = range.s.c; colNumber <= range.e.c; colNumber += 1) {
      headers.push(this.sheet[XLSX.utils.encode_cell({ r: range.s.r, c: colNumber })].v);
    }

    const rows = [];

    for (let rowNumber = range.s.r + 1; rowNumber <= range.e.r; rowNumber += 1) {
      let row = {};

      let hasData = false;

      for (let colNumber = range.s.c; colNumber <= range.e.c; colNumber += 1) {
        const cell = this.sheet[XLSX.utils.encode_cell({ r: rowNumber, c: colNumber })];

        if (typeof cell !== "undefined") {
          hasData = true;
        }

        row[headers[colNumber]] = cell;
      }

      if (hasData) {
        rows.push(row);
      }
    }

    this.result = rows.map((row) => this.#rowAsJSON(row));
  }

  print() {
    console.log(this.result);
  }

  #rowAsJSON(row) {
    const json = {};

    // 'Google Maps': '1',
    // 'Ancient Township (Legge)': 'NULL',
    // 'Ancient County (Legge)': "Ch'ang-gan",
    // 'Ancient Country (Legge)': "After Ts'in",
    // 'Ancient County (Modern)': "Chang'an",
    // 'Ancient Country (Modern)': 'Later Qin',
    // 'Legge Township (Legge)': 'NULL',
    // 'Legge County (Legge)': 'Ch’ang-gan',
    // 'Legge Prefecture (Legge)': 'Se-gan',
    // 'Legge Province (Legge)': 'Shen-se',
    // 'Legge Country (Legge)': 'China',
    // 'Legge Township (Modern)': 'NULL',
    // 'Legge Country (Modern)': 'China',
    // 'Modern Township': 'Xinjiapocun',
    // 'Modern County': 'Yanta',
    // 'Modern Prefecture': "Xi'an",
    // 'Modern Province': 'Shaanxi',
    // 'Modern Country': 'China',
    // 'Ancient Ruler (Legge)': 'Yâo Hing',
    // 'Ancient Ruler (Modern)': 'Yáo Xìng',
    // Chapter: 1,
    // Paragraph: 0,
    // Sentence: 0,
    // Footnote: 'NULL'

    json["name"] = this.#displayValueObject(row, NAME_KEY_MAP);

    json["nonRomanizedName"] = this.#mapKeys(row, NON_ROMANIZRD_NAME_KEY_MAP);

    json["position"] = this.#mapKeys(row, POSITION_KEY_MAP);

    return json;
  }

  #displayValueObject(row, keyMap) {
    const foundKeys = Object.keys(keyMap).filter((key) => row[key]);

    switch(foundKeys.length) {
    case 0:
      return null;
    case 1:
      return row[foundKeys[0]].v;
    default:
      return this.#mapKeys(row, keyMap);
    }
  }

  #mapKeys(row, keyMap) {
    return Object.keys(keyMap).reduce((accumulator, key) => {
      if (row[key] && row[key].v !== "NULL") {
        accumulator[keyMap[key]] = row[key].v;
      }

      return accumulator;
    }, {});
  }
}

module.exports = PlacesImporter;
