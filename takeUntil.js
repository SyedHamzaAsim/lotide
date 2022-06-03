const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }

  return results;
};


const eqArrays = function(actualArray, ExpectedArray) {
  let answer = true;
  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== ExpectedArray[i]) {
      answer = false;
    }
  }
  return answer;
};


const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log(`✔️ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`❌ Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);