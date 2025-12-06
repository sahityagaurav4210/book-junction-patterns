# Book Junction Patterns

- Author: Gaurav Sahitya
- Version: v1.2

## ![About](./images/about.png) About

This package contains all patterns commonly used in web and mobile development projects. Patterns defined in this package are divided into following categories

- Commons
- Personal Identification (PI)

## ![Installation](./images/installation.png) Installation

Please follow these steps to install this package into your project.

```sh
    npm install @book-junction/patterns
```

**Note:** This command requires Node.js; please install the latest version from its official website before running it.


## ![Usage](./images/usage.png) Usage

Let's see the paterns which are defined in the commons category.

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

// For checking date of birth

const dob = Patterns.common.dob.test('1999-07-30'); //true
```

Now let's see the patterns which are defined in the personal identification category (pi)

```javascript
// Importing
const Patterns = require('@book-junction/patterns');

//Aadhar number
const aadharNumber = Patterns.pi.aadharNumber.test('7914-8520-1234'); // true

//Pan number
const panNumber = Patterns.pi.panNumber.test('LOTCS1963W'); // true

//Voter id number
const voterNumber = Patterns.pi.voterIdNumber.test('LAZ1775211'); // true

//Passport number
const passportNumber = Patterns.pi.passportNumber.test('M8765432'); // true
```

## ![Points](./images/points.png) Points to consider

- Password must be atleast 8 characters and atmost 32 characters long. It should also contain atleast one uppercase letter, one lowercase letter, one digit and one special character.
- All email clients are supported by this package.
- This package is a commonjs node package.


## ![Author](./images/author.png) Know more about author

Hello my name is Gaurav Sahitya - the author of this package. I'm a software engineer currently working at C-DAC (Meity, GoI). I have more than 2.5 years of experience of developing software systems, websites etc. For more information please visit my [profile](https://sgaurav.me). Please follow me on  [Linkedin](https://www.linkedin.com/in/sahityagaurav4210) and 
[Github](https://www.github.com/sahityagaurav4210).