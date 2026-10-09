// test/simple-statistics.test.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('simple-statistics – chi‑squared goodness‑of‑fit', function () {
  // significance level for the test
  const alpha = 0.05;

  // Expected probabilities for a uniform distribution over 4 categories
  const uniformProb = [0.25, 0.25, 0.25, 0.25];

  it(dataMatch, uniformProb, alpha);

    // Because the data are uniform, we expect the null NOT to be rejected.
    assert.strictEqual(
      reject,
      false,
      'Uniform data should not be rejected'
    );
  });

  