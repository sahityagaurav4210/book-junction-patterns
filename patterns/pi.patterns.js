const PI = Object.freeze({
    aadharNumber: /^\d{4}(-\d{4}){2}$|^\d{12}$/,
    panNumber: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{10}$/,
    voterIdNumber: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{10}$/,
    passportNumber: /^(A|B|E|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X)[\d]{7}$/
});

module.exports = PI;