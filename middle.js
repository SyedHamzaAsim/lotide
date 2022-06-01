const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) == true) {
    console.log(`✔️ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`❌ Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const eqArrays = function (actualArray, expectedArray) {
  let answer = true;
  if (actualArray.length !== expectedArray.length) return false
  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      answer = false;
    }
  }
  return answer;
}

const middle = function (array) {
  if (array.length <= 2) return [];
  if (array.length % 2 == 1) return array[(array.length - 1)/2]
  if (array.length % 2 == 0) return [array[(array.length/2)-1], array[array.length/2]]
} 

assertArraysEqual(middle([1]),[1, 2]);
assertArraysEqual(middle([1, 1, 2, 3]),[1, 2]);


