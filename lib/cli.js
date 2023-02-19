import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import XLSX from "xlsx";
import PeopleImporter from "../lib/importers/people-importer.js";
import PlacesImporter from "../lib/importers/places-importer.js";

class CLI {
  constructor(argv) {
    this.#parseArgv(argv);

    // Not sure I like this but I'm lazy and it works.
    this.command = this.argv._[0];
    this.inputFilePath = this.argv.file;
    this.verbose = this.argv.verbose
    this.data = null;
  }

  run() {
    this.#loadFile();

    if (!this.data) {
      return 1;
    }

    const workbook = XLSX.read(this.data);

    let importer = null;

    switch (this.command) {
    case "people":
      if (this.verbose) {
        console.log(`Importing people from ${this.inputFilePath}...`);
      }

      importer = new PeopleImporter(workbook);

      break;
    case "places":
      if (this.verbose) {
        console.log(`Importing places from ${this.inputFilePath}...`);
      }

      importer = new PlacesImporter(workbook);

      break;
    }

    if (!importer) {
      console.error(`No importer selected. Command value was "${this.command}".`);

      return 2;
    }

    importer.parse();

    // TODO: Pass an argument to determine whether the resulting JSON is written
    // to stdout or to a file.
    importer.print();

    return 0;
  }

  #loadFile() {
    if (!fs.existsSync(this.inputFilePath)) {
      // Maybe throw an exception? This is kinda hard to follow. Returning early
      // causes this.data to be null. This causes `run` to return 1. Not a huge
      // fan of that.
      console.error(`Error: No such file or directory ${argv.file}.`);

      return;
    }

    // Not sure I like this but I'm lazy and it works.
    this.data = fs.readFileSync(this.inputFilePath);
  }

  #parseArgv(argv) {
    this.argv = yargs(hideBin(process.argv))
      .demandCommand(1)
      .command("places", "Import places from xlsx file")
      .command("people", "Import people from xlsx file")
      .alias("f", "file")
      .nargs("f", 1)
      .describe("f", "Select file to load")
      .demandOption(["f"])
      .alias("v", "verbose")
      .argv;
  }
}

export default CLI;
