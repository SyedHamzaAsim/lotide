const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function (actualArray, ExpectedArray) {
  let answer = true;
  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== ExpectedArray[i]) {
      answer = false;
    }
  }
  return answer;
}


const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) == true) {
    console.log(`✔️ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`❌ Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])