const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") break;
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};


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

console.log(letterPositions("Lighthouse Labs"))

assertArraysEqual(letterPositions("hello").e, [1]);