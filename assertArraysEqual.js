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

assertArraysEqual(['hello', 'world'],[1, 2]);
assertArraysEqual([1, 2],[1, 2]);