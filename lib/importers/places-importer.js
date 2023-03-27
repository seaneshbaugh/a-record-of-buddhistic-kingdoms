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
const ANCIENT_POLITICAL_ENTITIES_KEY_MAP = {
  "township": {
    "Ancient Township (Legge)": "legge",
    "Ancient Township (Modern)": "modern"
  },
  "county": {
    "Ancient County (Legge)": "legge",
    "Ancient County (Modern)": "modern"
  },
  "prefecture": {
    "Ancient Prefecture (Legge)": "legge",
    "Ancient Prefecture (Modern)": "modern"
  },
  "province": {
    "Ancient Province (Legge)": "legge",
    "Ancient Province (Modern)": "modern"
  },
  "country": {
    "Ancient Country (Legge)": "legge",
    "Ancient Country (Modern)": "modern"
  }
};
const LEGGE_POLITICAL_ENTITIES_KEY_MAP = {
  "township": {
    "Legge Township (Legge)": "legge",
    "Legge Township (Modern)": "modern"
  },
  "county": {
    "Legge County (Legge)": "legge",
    "Legge County (Modern)": "modern"
  },
  "prefecture": {
    "Legge Prefecture (Legge)": "legge",
    "Legge Prefecture (Modern)": "modern"
  },
  "province": {
    "Legge Province (Legge)": "legge",
    "Legge Province (Modern)": "modern"
  },
  "country": {
    "Legge Country (Legge)": "legge",
    "Legge Country (Modern)": "modern"
  }
};
const MODERN_POLITICAL_ENTITIES_KEY_MAP = {
  "township": {
    "Modern Township": "modern"
  },
  "county": {
    "Modern County": "modern"
  },
  "prefecture": {
    "Modern Prefecture": "modern"
  },
  "province": {
    "Modern Province": "modern"
  },
  "country": {
    "Modern Country": "modern"
  }
};
const ANCIENT_DESTINATION_KEY_MAP = {
  "Ancient Destination (Legge)": "legge",
  "Ancient Destination (Modern)": "modern"
};
const MODERN_DESTINATION_KEY_MAP = {
  "Modern Destination": "modern"
};
const ANCIENT_RULER_KEY_MAP = {
  "Ancient Ruler (Legge)": "legge",
  "Ancient Ruler (Modern)": "modern"
};
const REFERENCE_KEY_MAP = {
  "Chapter": "chapter",
  "Paragraph": "paragraph",
  "Sentence": "sentence",
  "Footnote": "footnote"
};
const CONFIDENCE_KEY = "Confidence";
const NOTES_KEY = "Notes";
// Kinda hate this but I don't got any better ideas right now that won't require too much work to
// make it worth doing.
const DOMAIN_NAME_LABEL_MAP = {
  "en.wikipedia.org": "Wikipedia",
  "tourism.bihar.gov.in": "Bihar Tourism"
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
    console.log(JSON.stringify(this.result, null, 2));
  }

  #rowAsJSON(row) {
    const json = {};

    json["name"] = this.#displayValueObject(row, NAME_KEY_MAP);
    json["nonRomanizedName"] = this.#mapKeys(row, NON_ROMANIZRD_NAME_KEY_MAP);
    json["position"] = this.#mapPosition(row, POSITION_KEY_MAP);
    json["ancientPoliticalEntities"] = this.#mapPoliticalEntities(row, ANCIENT_POLITICAL_ENTITIES_KEY_MAP);
    json["leggePoliticalEntities"] = this.#mapPoliticalEntities(row, LEGGE_POLITICAL_ENTITIES_KEY_MAP);
    json["modernPoliticalEntities"] = this.#mapPoliticalEntities(row, MODERN_POLITICAL_ENTITIES_KEY_MAP);
    json["ancientDestination"] = this.#mapDestination(row, ANCIENT_DESTINATION_KEY_MAP);
    json["modernDestination"] = this.#mapDestination(row, MODERN_DESTINATION_KEY_MAP);
    json["ancientRuler"] = this.#mapRuler(row, ANCIENT_RULER_KEY_MAP);
    json["reference"] = this.#mapReference(row, REFERENCE_KEY_MAP);
    json["confidence"] = row[CONFIDENCE_KEY]?.v;
    json["notes"] = row[NOTES_KEY]?.v;

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

  #mapLink(cell) {
    if (!cell?.l) {
      return undefined;
    }

    return {
      "url": cell.l.Target,
      "text": DOMAIN_NAME_LABEL_MAP[(new URL(cell.l.Target)).host]
    };
  }

  #mapPosition(row, keyMap) {
    const coordinates = this.#mapKeys(row, keyMap);

    if (!coordinates["lat"]) {
      coordinates["lat"] = "0";
    }

    if (!coordinates["lng"]) {
      coordinates["lng"] = "0";
    }

    coordinates["lat"] = parseFloat(coordinates["lat"]);
    coordinates["lng"] = parseFloat(coordinates["lng"]);

    return coordinates;
  }

  #mapPoliticalEntity(row, keyMap, type) {
    const name = this.#displayValueObject(row, keyMap);

    if (!name || name === "NULL" || ((typeof name === "object") && (!name["legge"] && !name["modern"]))) {
      return null;
    }

    // We can assume that the links for both entries are the same.
    const link = this.#mapLink(row[Object.keys(keyMap)[0]]);

    return { name, type, link };
  }

  #mapPoliticalEntities(row, keyMap) {
    const township = this.#mapPoliticalEntity(row, keyMap["township"], "township");
    const county = this.#mapPoliticalEntity(row, keyMap["county"], "county");
    const prefecture = this.#mapPoliticalEntity(row, keyMap["prefecture"], "prefecture");
    const province = this.#mapPoliticalEntity(row, keyMap["province"], "province");
    const country = this.#mapPoliticalEntity(row, keyMap["country"], "country");

    return [township, county, prefecture, province, country].filter((politicalEntity) => !!politicalEntity);
  }

  #mapDestination(row, keyMap) {
    const name = this.#displayValueObject(row, keyMap);

    if (!name || name === "NULL" || ((typeof name === "object") && (!name["legge"] && !name["modern"]))) {
      return null;
    }

    // We can assume that the links for both entries are the same.
    const link = this.#mapLink(row[Object.keys(keyMap)[0]]);

    return { name, "links": [link] };
  }

  #mapRuler(row, keyMap) {
    const name = this.#displayValueObject(row, keyMap);

    if (!name || name === "NULL" || ((typeof name === "object") && (!name["legge"] && !name["modern"]))) {
      return null;
    }

    // We can assume that the links for both entries are the same.
    const link = this.#mapLink(row[Object.keys(keyMap)[0]]);

    return { name, "links": [link] };
  }

  #mapReference(row, keyMap) {
    const location = this.#mapKeys(row, keyMap);

    const text = (() => {
      const chapter = require(`../../src/data/book/chapter_${location['chapter'].toString().padStart(2, "0")}.json`);

      if (location["paragraph"] == null || !location["sentence"] == null) {
        return null;
      }

      if (location["footnote"]) {
        return chapter["footnotes"][location["footnote"]]["paragraphs"][location["paragraph"]]["sentences"][location["sentence"]] || null;
      } else {
        const sentence = chapter["content"]["paragraphs"][location["paragraph"]]["sentences"][location["sentence"]]

        if (sentence != null) {
          if (typeof sentence === "string") {
            return sentence.replace(/\[\d+\]/g, "");
          } else {
            Object.keys(sentence).forEach((key) => sentence[key] = sentence[key].replace(/\[\d+\]/g, ""));

            return sentence;
          }
        } else {
          return null;
        }
      }
    })();

    return { location, text };
  }
}

module.exports = PlacesImporter;
