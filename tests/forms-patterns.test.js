const Patterns = require('../patterns');

describe('forms-patterns.test.js', function () {
  describe('Simple description pattern test', function () {
    const descriptionPattern = Patterns.forms.description;

    it('should match valid descriptions', function () {
      const validDescriptions = [
        'This is a valid description.',
        'Description with numbers 12345',
        'Special characters - , . ( ) / : are allowed',
        'A'.repeat(255), // Max length
      ];

      validDescriptions.forEach(function (description) {
        expect(descriptionPattern.test(description)).toBe(true);
        expect(typeof descriptionPattern.test(description)).toBe('boolean');
      });
    });

    it('should not match invalid descriptions', function () {
      const invalidDescriptions = [
        'Description with more than 255 characters: ' + 'A'.repeat(256),
        'Description with special characters like @#$%^&*()',
        '',
      ];
      invalidDescriptions.forEach(function (description) {
        expect(descriptionPattern.test(description)).toBe(false);
        expect(typeof descriptionPattern.test(description)).toBe('boolean');
      });
    });
  });

  describe('Multiline description pattern test', function () {
    const multilineDescPattern = Patterns.forms.multilineDesc;

    it('should match valid multiline descriptions', function () {
      const validMultilineDescriptions = [
        'This is a valid multiline description.\nIt has multiple lines.',
        'Line 1: Description with numbers 12345\nLine 2: More text here.',
        'Special characters - , . ( ) / : are allowed\nNew line here.',
        'A'.repeat(255), // Max length
      ];

      validMultilineDescriptions.forEach(function (description) {
        expect(multilineDescPattern.test(description)).toBe(true);
        expect(typeof multilineDescPattern.test(description)).toBe('boolean');
      });
    });

    it('should not match invalid multiline descriptions', function () {
      const invalidMultilineDescriptions = [
        'Description with more than 255 characters: ' + 'A'.repeat(256),
        'Description with special characters like @#$%^&*()\nAnother line.',
        '',
      ];

      invalidMultilineDescriptions.forEach(function (description) {
        expect(multilineDescPattern.test(description)).toBe(false);
        expect(typeof multilineDescPattern.test(description)).toBe('boolean');
      });
    });
  });
});
