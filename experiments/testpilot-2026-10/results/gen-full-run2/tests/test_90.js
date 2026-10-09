// test/simple_statistics.test.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('simple-statistics chiSquaredGoodnessOfFit', function () {
  it('should not reject a uniform distribution (p‑value > 0.05)', function () {
    // Simple data that matches a uniform distribution over {0,1}
    const data = [0, 1, 0, 1];

    // Distribution function returning the expected probability for each possible value
    const distribution = (x) => (x === 0 || x === 1 ? 0.5 : 0);

    const significance = 0.05; // typical 5% significance level

    // Run the test
    const result = ss.chiSquaredGoodnessOfF