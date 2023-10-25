const XLSX = require("xlsx");
const BaseImporter = require("./base-importer.js");

const SHEET_NAME = "Places";
const ID_KEY = "Google Maps";
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
// Kinda hate this but I don't got any better ideas right now that won't require
// too much work to make it worth doing. This is necessary because the actual
// text for the links is the name of the political entity or whatever.
// Fortunately there are only a few different sites that actually get linked and
// we know them all ahead of time. This is messy but it works and I'd rather not
// have to add a bunch of columns to my spreadsheet to make this unecessary.
const DOMAIN_NAME_LABEL_MAP = {
  "en.wikipedia.org": "Wikipedia",
  "tourism.bihar.gov.in": "Bihar Tourism"
};

class PlacesImporter extends BaseImporter {
  rowAsJSON(row) {
    const json = {};

    json["id"] = row[ID_KEY]?.v;
    json["name"] = this.displayValueObject(row, NAME_KEY_MAP);
    json["nonRomanizedName"] = this.mapKeys(row, NON_ROMANIZRD_NAME_KEY_MAP);
    json["position"] = this.mapPosition(row, POSITION_KEY_MAP);
    json["ancientPoliticalEntities"] = this.mapPoliticalEntities(row, ANCIENT_POLITICAL_ENTITIES_KEY_MAP);
    json["leggePoliticalEntities"] = this.mapPoliticalEntities(row, LEGGE_POLITICAL_ENTITIES_KEY_MAP);
    json["modernPoliticalEntities"] = this.mapPoliticalEntities(row, MODERN_POLITICAL_ENTITIES_KEY_MAP);
    json["ancientDestination"] = this.mapDestination(row, ANCIENT_DESTINATION_KEY_MAP);
    json["modernDestination"] = this.mapDestination(row, MODERN_DESTINATION_KEY_MAP);
    json["ancientRuler"] = this.mapRuler(row, ANCIENT_RULER_KEY_MAP);
    json["reference"] = this.mapReference(row, REFERENCE_KEY_MAP);
    json["confidence"] = row[CONFIDENCE_KEY]?.v;
    json["notes"] = row[NOTES_KEY]?.v;

    return json;
  }

  mapPosition(row, keyMap) {
    const coordinates = this.mapKeys(row, keyMap) || {};

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

  mapPoliticalEntity(row, keyMap, type) {
    const name = this.displayValueObject(row, keyMap);

    if (!name || name === "NULL" || ((typeof name === "object") && (!name["legge"] && !name["modern"]))) {
      return null;
    }

    // We can assume that the links for both entries are the same.
    const link = this.mapLink(row[Object.keys(keyMap)[0]], DOMAIN_NAME_LABEL_MAP);

    return { name, type, link };
  }

  mapPoliticalEntities(row, keyMap) {
    const township = this.mapPoliticalEntity(row, keyMap["township"], "township");
    const county = this.mapPoliticalEntity(row, keyMap["county"], "county");
    const prefecture = this.mapPoliticalEntity(row, keyMap["prefecture"], "prefecture");
    const province = this.mapPoliticalEntity(row, keyMap["province"], "province");
    const country = this.mapPoliticalEntity(row, keyMap["country"], "country");

    return [township, county, prefecture, province, country].filter((politicalEntity) => !!politicalEntity);
  }

  mapDestination(row, keyMap) {
    const name = this.displayValueObject(row, keyMap);

    if (!name || name === "NULL" || ((typeof name === "object") && (!name["legge"] && !name["modern"]))) {
      return null;
    }

    // We can assume that the links for both entries are the same.
    const link = this.mapLink(row[Object.keys(keyMap)[0]], DOMAIN_NAME_LABEL_MAP);

    return { name, "links": [link] };
  }

  mapRuler(row, keyMap) {
    const name = this.displayValueObject(row, keyMap);

    if (!name || name === "NULL" || ((typeof name === "object") && (!name["legge"] && !name["modern"]))) {
      return null;
    }

    // We can assume that the links for both entries are the same.
    const link = this.mapLink(row[Object.keys(keyMap)[0]], DOMAIN_NAME_LABEL_MAP);

    return { name, "links": [link] };
  }

  sheetName() {
    return SHEET_NAME;
  }
}

module.exports = PlacesImporter;
