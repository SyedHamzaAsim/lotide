const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it("returns 2 for [1, 2]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});