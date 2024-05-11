## Book Junction Patterns

- Author: Gaurav Sahitya
- Version: v1.0

---

## About

This package contains all patterns used in book-junction project.

---

## Usage

```javascript
// Importing
const Patterns = require('@book-junction/patterns');

// For checking name

const name = Patterns.common.name.test('Gaurav Sahitya'); // true

// For checking email

const email = Patterns.common.email.test('gaurav@gmail.com'); // true

// For checking phone number

const phone = Patterns.common.phone.test('+919646560934'); //true

// For checking password

const password = Patterns.common.password.test('tesTing!23'); //true
```

---

## Points to consider

- Password must be atleast 8 characters and atmost 32 characters long. It should also contain atleast one uppercase letter, one lowercase letter, one digit and one special character.
- All email clients are supported by this package.
- This package is a commonjs node package.

---

## Know more about author

| [Linkedin](https://www.linked.com/in/sahityagaurav4210) | [Github](https://www.github.com/sahityagaurav4210) |
| ------------------------------------------------------- | -------------------------------------------------- |
