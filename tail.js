const assertEqual = require('./assertEqual');

const tail = function(arrayOfActual) {
  let tail = [];
  tail = arrayOfActual.slice(1);
  return tail;
};

module.exports = tail;