const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([4, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, "hello"], [1, 2, "hello"]), true);
assertEqual(eqArrays([1], [5]), true);