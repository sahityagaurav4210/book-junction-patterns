const Patterns = require("../patterns");

describe('pi-pattern.test.js test cases', () => {

    describe('aadhar card test cases', () => {
        it('should validate 7914-8520-1234 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('7914-8520-1234');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should validate 791485201234 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('791485201234');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 7914-85201234 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('7914-85201234');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 79148520-1234 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('79148520-1234');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 7914852012345 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('7914852012345');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 79!485201234 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('79!485201234');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 79!4852012345 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('79!4852012345');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 79!4-8520-1234 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('79!4-8520-1234');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 79!4-8520-12345 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('79!4-8520-12345');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 7914-8520-12345 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('7914-8520-12345');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 79A4-8520-12345 as a valid aadhar number', () => {
            const result = Patterns.pi.aadharNumber.test('79A4-8520-12345');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });
    });

    describe('pan card test cases', () => {
        it('should validate LCPCS1963A as a valid pan card number', () => {
            const result = Patterns.pi.panNumber.test('LCPCS1963A');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should validate 1234A67770 as a valid pan card number', () => {
            const result = Patterns.pi.panNumber.test('1234A67770');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate LCPCS1963AG as a valid pan card number', () => {
            const result = Patterns.pi.panNumber.test('LCPCS1963AG');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate LCPCS1963 as a valid pan card number', () => {
            const result = Patterns.pi.panNumber.test('LCPCS1963');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 1234567890 as a valid pan card number', () => {
            const result = Patterns.pi.panNumber.test('1234567890');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });
    });

    describe('voter card test cases', () => {
        it('should validate LCPCS1963A as a valid voter card number', () => {
            const result = Patterns.pi.voterIdNumber.test('LCPCS1963A');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should validate 1234A67770 as a valid voter card number', () => {
            const result = Patterns.pi.voterIdNumber.test('1234A67770');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate LCPCS1963AG as a valid voter card number', () => {
            const result = Patterns.pi.voterIdNumber.test('LCPCS1963AG');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate LCPCS1963 as a valid voter card number', () => {
            const result = Patterns.pi.voterIdNumber.test('LCPCS1963');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 1234567890 as a valid voter card number', () => {
            const result = Patterns.pi.voterIdNumber.test('1234567890');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });
    });

    describe('passport test cases', () => {

        it('should validate A1234567 as a valid passport number', () => {
            const result = Patterns.pi.passportNumber.test('A1234567');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should validate M8765432 as a valid passport number', () => {
            const result = Patterns.pi.passportNumber.test('M8765432');

            expect(result).toBe(true);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate C8765432 as a valid passport number', () => {
            const result = Patterns.pi.passportNumber.test('C8765432');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate O8765432 as a valid passport number', () => {
            const result = Patterns.pi.passportNumber.test('O8765432');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });

        it('should not validate 8765432 as a valid passport number', () => {
            const result = Patterns.pi.passportNumber.test('8765432');

            expect(result).toBe(false);
            expect(typeof result).toBe('boolean');
        });
    });

});
