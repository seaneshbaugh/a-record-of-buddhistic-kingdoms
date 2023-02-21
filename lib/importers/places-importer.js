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
const DOMAIN_NAME_LABEL_MAP = {
  "en.wikipedia.org": "Wikipedia"
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
    json["position"] = this.#mapKeys(row, POSITION_KEY_MAP);
    json["ancientPoliticalEntities"] = this.#mapPoliticalEntities(row, ANCIENT_POLITICAL_ENTITIES_KEY_MAP);
    json["leggePoliticalEntities"] = this.#mapPoliticalEntities(row, LEGGE_POLITICAL_ENTITIES_KEY_MAP);
    json["modernPoliticalEntities"] = this.#mapPoliticalEntities(row, MODERN_POLITICAL_ENTITIES_KEY_MAP);
    json["ancientDestination"] = this.#mapDestination(row, ANCIENT_DESTINATION_KEY_MAP);
    json["modernDestination"] = this.#mapDestination(row, MODERN_DESTINATION_KEY_MAP);
    json["ancientRuler"] = this.#mapRuler(row, ANCIENT_RULER_KEY_MAP);

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
    if (!cell.l) {
      return undefined;
    }

    return {
      "url": cell.l.Target,
      "text": DOMAIN_NAME_LABEL_MAP[(new URL(cell.l.Target)).host]
    };
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
}

module.exports = PlacesImporter;
