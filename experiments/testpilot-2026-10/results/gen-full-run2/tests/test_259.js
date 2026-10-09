// test-simple-statistics.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('simple-statistics library', function () {
  it(0.5), 0);

    // Additional sanity check with a non‑trivial value
    const p = 0.8;
    const expected = Math.log(p / (1 - p)); // manual calculation
    // Use a tolerance for floating‑point comparison
    const actual = ss.log