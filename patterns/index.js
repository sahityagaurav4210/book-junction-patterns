const Commons = require('./commons.patterns');
const PI = require("./pi.patterns");

/**
 * @class Patterns - A class that provides all the available patterns in this package
 */
class Patterns {
  /**
   * @returns Commons - A readonly object that contains commonly used regex patterns
   * @description It is a static property that gives you access of all commonly used regex patterns.
   */
  static get common() {
    return Commons;
  }

  /**
   * @returns PI - A readonly object that contains personal identification regex patterns
   * @description It is a static property that gives you access of all personal identification regex patterns such as Aadhar Card number, PAN Number, VoterID Number etc.
   */
  static get pi() {
    return PI;
  }
}

module.exports = Patterns;
