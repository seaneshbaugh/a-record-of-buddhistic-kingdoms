const XLSX = require("xlsx");

class BaseImporter {
  constructor(workbook) {
    this.workbook = workbook;
    this.sheet = this.workbook.Sheets[this.sheetName()];
    this.chapterCache = {};
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

    this.result = rows.map((row) => this.rowAsJSON(row));

    return this.result;
  }

  print() {
    console.log(JSON.stringify(this.result, null, 2));
  }

  displayValueObject(row, keyMap) {
    const foundKeys = Object.keys(keyMap).filter((key) => row[key]);

    switch(foundKeys.length) {
    case 0:
      return null;
    case 1:
      return row[foundKeys[0]].v;
    default:
      return this.mapKeys(row, keyMap);
    }
  }

  mapKeys(row, keyMap) {
    const result = Object.keys(keyMap).reduce((accumulator, key) => {
      if (row[key] && row[key].v !== "NULL") {
        accumulator[keyMap[key]] = row[key].v;
      }

      return accumulator;
    }, {});

    if (Object.keys(result).length === 0) {
      return null;
    }

    return result;
  }

  mapLink(cell, domainNameLabelMap) {
    if (!cell?.l) {
      return undefined;
    }

    let text = "";

    if (domainNameLabelMap) {
      text = domainNameLabelMap[(new URL(cell.l.Target)).host];
    } else {
      text = cell.v;
    }

    return {
      "url": cell.l.Target,
      "text": text
    };
  }

  mapReference(row, keyMap) {
    const location = this.mapKeys(row, keyMap);

    const text = (() => {
      if (location["chapter"] === "TITLE") {
        return "Title";
      }

      if (location["chapter"] === "AUTHOR") {
        return "Author";
      }

      let chapterPath = "../../src/data/book/";

      switch(location["chapter"]) {
      case "PREFACE":
        chapterPath += "preface.json";

        break;
      case "NOTE ON THE SKETCH-MAP":
        chapterPath += "note_on_the_sketch_map.json";

        break;
      case "INTRODUCTION":
        chapterPath += "introduction.json";

        break;
      default:
        chapterPath += `chapter_${location["chapter"].toString().padStart(2, "0")}.json`;
      }

      const chapter = require(chapterPath);

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

  rowAsJSON(row) {
    throw new Error("rowAsJSON not implemented");
  }

  sheetName() {
    throw new Error("sheetName not implemented");
  }
}

module.exports = BaseImporter;
