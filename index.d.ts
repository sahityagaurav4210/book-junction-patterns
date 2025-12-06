/**
 * Interface defining common, non-sensitive regex patterns.
 * Corresponds to patterns/commons.patterns.js
 */
export interface CommonsRegex {
    /** Regular expression for validating names (2 to 64 letters/spaces/periods). */
    readonly name: RegExp;
    /** Regular expression for validating phone numbers (10 to 15 digits, including optional '+'). */
    readonly phone: RegExp;
    /** Regular expression for validating email addresses. */
    readonly email: RegExp;
    /** Regular expression for validating passwords (requires digit, lower, upper, and special character, 8-32 length). */
    readonly password: RegExp;
    /** Regular expression for validating Date of Birth (various date formats). */
    readonly dob: RegExp;
}

/**
 * Interface defining Personally Identifiable Information (PII) related regex patterns.
 * Corresponds to patterns/pi.patterns.js
 */
export interface PIRegex {
    /** Regular expression for validating Aadhar Card numbers. */
    readonly aadharNumber: RegExp;
    /** Regular expression for validating PAN numbers. */
    readonly panNumber: RegExp;
    /** Regular expression for validating Voter ID numbers. */
    readonly voterIdNumber: RegExp;
    /** Regular expression for validating Passport numbers. */
    readonly passportNumber: RegExp;
}

/**
 * Class that provides all the available patterns in this package as static properties.
 */
declare class Patterns {
    /**
     * A readonly object that contains commonly used regex patterns.
     * Usage:-
     * Patterns.common.name.test('gaurav sahitya') //true
     * Patterns.common.phone.test('9646560231') //true
     * Patterns.common.email.test('gaurav@rediffmail.com') //true
     * Patterns.common.password.test('Testing!23') //true
     * Patterns.common.dob.test('1999-07-30') //true
     */
    static readonly common: CommonsRegex;

    /**
     * A readonly object that contains personal identification regex patterns
     * such as Aadhar Card number, PAN Number, VoterID Number etc.
     * Usage:-
     *  Patterns.pi.aadharNumber.test("8974-8520-1234") // true
     *  Patterns.pi.panNumber.test("LCPCS1963A") // true
     *  Patterns.pi.voterIdNumber.test('LCPCS1963A') // true
     *  Patterns.pi.passportNumber.test('A1234567') // true
     */
    static readonly pi: PIRegex;
}

export = Patterns;