// ==========================================================
// 1. Interfaces for the nested Regex Objects
// ==========================================================

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


// ==========================================================
// 2. Declaration of the exported Patterns Class
// ==========================================================

/**
 * Class that provides all the available patterns in this package as static properties.
 * Corresponds to patterns/index.js.
 */
declare class Patterns {
    // Note: TypeScript uses 'static readonly' for static getters defined in the JS class.

    /**
     * A readonly object that contains commonly used regex patterns.
     */
    static readonly common: CommonsRegex;

    /**
     * A readonly object that contains personal identification regex patterns
     * such as Aadhar Card number, PAN Number, VoterID Number etc.
     */
    static readonly pi: PIRegex;
}

// 3. Export the class using CommonJS syntax (matching module.exports = Patterns)
export = Patterns;