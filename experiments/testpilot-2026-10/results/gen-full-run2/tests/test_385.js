// test/simple_statistics.test.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('simple-statistics', function () {
  // A basic sanity‑check: the mean of [1,2,3,4,5] must be 3
  it('calculates the mean of an array correctly', function () {
    const data = [1, 2, 3, 4, 5];
    const result = ss.mean(data);
    assert.strictEqual(result, 3);
  });

  // Add any other checks you need here, e.g. variance, median, etc.
});