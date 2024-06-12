/**
 * CommonJS style:
**/

// the export file (first file):

function deepClone(value) {
  return;
}

const DAYS_IN_MILLI = 1000 * 60 * 60 * 24;

class Utils = {

}

module.exports = {
  deepClone,
  DAYS_IN_MILLI,
  Utils,
}

// ---------

// and on the import side (the second file):
const { DAYS_IN_MILLI, deepClone, Utils } = require('./your-file.js');

deepClone();
Utils.getStatistics();