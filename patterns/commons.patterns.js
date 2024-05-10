const Commons = Object.freeze({
  name: /^[A-Za-z\s\.]{2,64}$/,
  phone: /^[\+\d]{10,15}$/,
  email: /^[a-zA-Z\.\_0-9]{2,}[@]{1}[a-z]{3,32}[.]{1}[a-z\.]{2,10}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[\W_]).{8,32}$/,
});

module.exports = Commons;
