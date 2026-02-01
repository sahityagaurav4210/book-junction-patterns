const Forms = Object.freeze({
  description: /^[a-zA-Z\s0-9().\-,/:]{2,255}$/,
  multilineDesc: /^[a-zA-Z\s0-9().,\-/\n:]{2,255}$/,
});

module.exports = Forms;
