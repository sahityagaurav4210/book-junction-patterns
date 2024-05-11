const Commons = require('./commons.patterns');

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
}

module.exports = Patterns;
