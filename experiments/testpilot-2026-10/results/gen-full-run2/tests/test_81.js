// test/simple-statistics.test.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('simple-statistics – chi‑squared goodness‑of‑fit', function () {
  // significance level for the test
  const alpha = 0.05;

  // Expected probabilities for a uniform distribution over 4 categories
  const uniformProb = [0.25, 0.25, 0.25, 0.25];

  it('should reject data that deviates strongly from the uniform distribution', function () {
    // All observations fall into the first category → clearly non‑uniform
    const dataBad = [4, 0, 0, 0];

    const reject = ss.chiSquaredGoodnessOfF