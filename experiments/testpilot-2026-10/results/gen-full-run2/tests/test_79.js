// test/simple-statistics.test.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('simple-statistics – chi‑squared goodness‑of‑fit', function () {
  // significance level for the test
  const alpha = 0.05;

  // Expected probabilities for a uniform distribution over 4 categories
  const uniformProb = [0.25, 0.25, 0.25, 0.25];

  it('should NOT reject data that follows the uniform distribution', function () {
    // Observed frequencies – each category appears once → matches uniform
    const dataMatch = [1, 1, 1, 1];

    // ss.chiSquaredGoodnessOfFit returns **true** when the null hypothesis
    // (that the data follow the supplied distribution) is REJECTED.
    const reject = ss.chiSquaredGoodnessOfF