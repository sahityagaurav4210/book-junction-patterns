const PI = Object.freeze({
    aadharNumber: /^\d{4}(-\d{4}){2}$|^\d{12}$/,
    panNumber: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{10}$/,
    voterIdNumber: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{10}$/,
    passportNumber: /^([a-zA-Z]{2}\d{6}|[a-zA-Z]{1}\d{7})$/
});

module.exports = PI;