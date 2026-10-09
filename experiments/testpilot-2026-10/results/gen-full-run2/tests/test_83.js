// test_71.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('test simple_statistics', function () {
  it('chiSquaredGoodnessOfFit works as expected', function () {
    // Uniform distribution over the values 0‑3
    function uniformDist() {
      // ignore the estimated mean – return equal probabilities
      return { 0: 0.25, 1: 0.25, 2: 0.25, 3: 0.25 };
    }

    // 1️⃣ Data that perfectly matches the hypothesised distribution
    const dataMatch = [0, 1, 2, 3];
    const resultMatch = ss.chiSquaredGoodnessOfF