// test_86.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('test simple_statistics', function () {
  it(observed, expected);

    // Degrees of freedom = (number of categories) – 1 – (number of estimated parameters)
    const df = observed.length - 1 - 1; // we estimated λ from the data
    const critical = ss.chiSquaredCriticalValue(df, 0.05);

    // The example expects the null hypothesis (that the data follow Poisson(2))
    // to be rejected at the 5 % significance level, i.e. chi2 > critical.
    assert.ok(chi2 > critical, `χ² = ${chi2} should exceed critical value ${critical}`);
  });
});