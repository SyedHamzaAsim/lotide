const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns [1, 2] for [1, 1, 2, 3]", () => {
    assert.deepEqual(middle([1, 1, 2, 3]),[1, 2]);
  });
  
  it("returns [7] for [4, 7, 8]", () => {
    assert.strictEqual(middle([4, 7, 8]), 7);
  });

});