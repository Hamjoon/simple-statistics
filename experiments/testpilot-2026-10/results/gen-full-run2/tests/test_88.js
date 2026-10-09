// test_86.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('test simple_statistics', function () {
  it('test simple-statistics.chiSquaredGoodnessOfFit', function () {
    // Data from Poisson goodness‑of‑fit example 10‑19 (William W. Hines & Douglas C. Montgomery)
    const data1019 = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 2, 2, 2, 2, 2, 2, 2, 2,
      3, 3, 3, 3
    ];

    // -------------------------------------------------
    // 1. Build the observed frequency table
    // -------------------------------------------------
    const maxObserved = Math.max(...data1019);
    const observed = new Array(maxObserved + 1).fill(0);
    data1019.forEach(v => observed[v]++);

    // -------------------------------------------------
    // 2. Build the expected frequencies using a Poisson(λ = 2) model
    // -------------------------------------------------
    const lambda = 2; // mean of the data set
    const poissonDist = ss.poissonDistribution(lambda);
    const n = data1019.length;
    const expected = observed.map((_, k) => poissonDist(k) * n);

    // -------------------------------------------------
    // 3. Perform the chi‑squared goodness‑of‑fit test
    // -------------------------------------------------
    const chi2 = ss.chiSquaredGoodnessOfF