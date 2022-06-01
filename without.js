const eqArrays = function(actualArray, expectedArray) {
  let answer = true;
  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      answer = false;
    }
  }

  if (actualArray.length !== expectedArray.length) {
    answer = false;
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

const without = function(sourceArray, removalArray) {
  let newArray = [...sourceArray];
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < removalArray.length; j++) {
      if (newArray[i] === removalArray[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  console.log(newArray);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
let words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);