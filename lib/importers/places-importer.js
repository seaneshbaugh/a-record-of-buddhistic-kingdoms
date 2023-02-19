class PlacesImporter {
  constructor(workbook) {
    this.workbook = workbook;
  }

  parse() {
    this.result = this.workbook;
  }

  print() {
    console.log(this.result);
  }
}

export default PlacesImporter;
