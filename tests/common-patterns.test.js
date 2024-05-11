const Patterns = require('../patterns');

describe('common-patterns.test.js', function () {
  describe('name pattern test cases', function () {
    it('name regex pattern should validate gaurav sahitya', function () {
      expect(Patterns.common.name.test('gaurav sahitya')).toBe(true);
    });

    it('result of name regex pattern against gaurav sahitya should be a boolean', function () {
      const result = Patterns.common.name.test('gaurav sahitya');
      expect(typeof result).toBe('boolean');
    });

    it('name regex pattern should not validate g', function () {
      expect(Patterns.common.name.test('g')).toBe(false);
    });

    it('name regex pattern should not validate gaurav32', function () {
      expect(Patterns.common.name.test('gaurav32')).toBe(false);
    });

    it('name regex pattern should validate Gaurav Sahitya', function () {
      expect(Patterns.common.name.test('Gaurav Sahitya')).toBe(true);
    });

    it('name regex pattern should also validate A.K. Mallik', function () {
      expect(Patterns.common.name.test('A.K. Mallik')).toBe(true);
    });

    it('name regex pattern should also validate a.K. mAllik', function () {
      expect(Patterns.common.name.test('a.K. mAllik')).toBe(true);
    });

    it('name regex pattern should not validate G@urav', function () {
      expect(Patterns.common.name.test('G@urav')).toBe(false);
    });
  });

  describe('phone pattern test cases', function () {
    it('phone regex pattern should validate 8837573143', function () {
      expect(Patterns.common.phone.test('8837573143')).toBe(true);
    });

    it('phone regex pattern should validate 918837573143', function () {
      expect(Patterns.common.phone.test('918837573143')).toBe(true);
    });

    it('phone regex pattern should validate +918837573143', function () {
      expect(Patterns.common.phone.test('+918837573143')).toBe(true);
    });

    it('phone regex pattern should not validate +9!8837573143', function () {
      expect(Patterns.common.phone.test('+9!8837573143')).toBe(false);
    });

    it('phone regex pattern should not validate 9!8837573143', function () {
      expect(Patterns.common.phone.test('9!8837573143')).toBe(false);
    });

    it('phone regex pattern should not validate 8837573!43', function () {
      expect(Patterns.common.phone.test('8837573!43')).toBe(false);
    });

    it('phone regex pattern should not validate 883757343', function () {
      expect(Patterns.common.phone.test('883757343')).toBe(false);
    });

    it('phone regex pattern should not validate 8837573I43', function () {
      expect(Patterns.common.phone.test('8837573I43')).toBe(false);
    });
  });

  describe('email pattern test cases', function () {
    it('email regex pattern should validate gauravsahitya@rediffmail.com', function () {
      expect(Patterns.common.email.test('gauravsahitya@rediffmail.com')).toBe(true);
    });

    it('email regex pattern should validate dheerajkumar12757@gmail.com', function () {
      expect(Patterns.common.email.test('dheerajkumar12757@gmail.com')).toBe(true);
    });

    it('email regex pattern should validate dheeraj@gmail.com', function () {
      expect(Patterns.common.email.test('dheeraj@gmail.com')).toBe(true);
    });

    it('email regex pattern should not validate d@gmail.com', function () {
      expect(Patterns.common.email.test('d@gmail.com')).toBe(false);
    });

    it('email regex pattern should not validate d@g.com', function () {
      expect(Patterns.common.email.test('d@.com')).toBe(false);
    });

    it('email regex pattern should validate dheeraj@irctc.co.in', function () {
      expect(Patterns.common.email.test('dheeraj@irctc.co.in')).toBe(true);
    });

    it('email regex pattern should not validate dheeraj@irctc69.co.in', function () {
      expect(Patterns.common.email.test('dheeraj@irctc69.co.in')).toBe(false);
    });

    it('email regex pattern should not validate dheeraj@!rctc69.co.in', function () {
      expect(Patterns.common.email.test('dheeraj@!rctc69.co.in')).toBe(false);
    });

    it('email regex pattern should not validate dheeraj@!rctc.co.in', function () {
      expect(Patterns.common.email.test('dheeraj@!rctc.co.in')).toBe(false);
    });

    it('email regex pattern should not validate dheerajirctc.co.in', function () {
      expect(Patterns.common.email.test('dheerajirctc.co.in')).toBe(false);
    });

    it('email regex pattern should not validate dheeraj@irctccoin', function () {
      expect(Patterns.common.email.test('dheeraj@irctccoin')).toBe(false);
    });

    it('email regex pattern should validate dheeraj.kumar@irctc.co.in', function () {
      expect(Patterns.common.email.test('dheeraj@irctc.co.in')).toBe(true);
    });

    it('email regex pattern should validate dheeraj_kumar@irctc.co.in', function () {
      expect(Patterns.common.email.test('dheeraj@irctc.co.in')).toBe(true);
    });

    it('email regex pattern should validate dheeraj.kumar@pspcl.gov.in', function () {
      expect(Patterns.common.email.test('dheeraj.kumar@pspcl.gov.in')).toBe(true);
    });
  });

  describe('password pattern test cases', function () {
    it('password regex pattern should validate Testing!23', function () {
      expect(Patterns.common.password.test('Testing!23')).toBe(true);
    });

    it('password regex pattern should validate Testing2!3', function () {
      expect(Patterns.common.password.test('Testing2!3')).toBe(true);
    });

    it('password regex pattern should validate Testing23!', function () {
      expect(Patterns.common.password.test('Testing23!')).toBe(true);
    });

    it('password regex pattern should not validate testing!23', function () {
      expect(Patterns.common.password.test('testing!23')).toBe(false);
    });

    it('password regex pattern should not validate Testing23', function () {
      expect(Patterns.common.password.test('Testing23')).toBe(false);
    });

    it('password regex pattern should not validate Testing!', function () {
      expect(Patterns.common.password.test('Testing!')).toBe(false);
    });

    it('password regex pattern should not validate test!23', function () {
      expect(Patterns.common.password.test('test!23')).toBe(false);
    });

    it('password regex pattern should not validate Test!23', function () {
      expect(Patterns.common.password.test('Test!23')).toBe(false);
    });

    it('password regex pattern should validate tesTing!23', function () {
      expect(Patterns.common.password.test('tesTing!23')).toBe(true);
    });

    it('password regex pattern should validate tes_Ting!23', function () {
      expect(Patterns.common.password.test('tes_Ting!23')).toBe(true);
    });

    it('password regex pattern should validate @Bc1034@test!2024', function () {
      expect(Patterns.common.password.test('@Bc1034@test!2024')).toBe(true);
    });
  });
});
