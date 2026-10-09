// test/simple-statistics.test.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('simple-statistics – chi‑squared goodness‑of‑fit', function () {
  // significance level for the test
  const alpha = 0.05;

  // Expected probabilities for a uniform distribution over 4 categories
  const uniformProb = [0.25, 0.25, 0.25, 0.25];

  it(dataBad, uniformProb, alpha);

    // The test must reject the null hypothesis for this pathological case.
    assert.strictEqual(
      reject,
      true,
      'Non‑uniform data should be rejected'
    );
  });
});