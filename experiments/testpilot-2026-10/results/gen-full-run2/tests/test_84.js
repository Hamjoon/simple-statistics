// test_71.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('test simple_statistics', function () {
  it(dataMatch, uniformDist);
    // For a perfect match the chi‑squared statistic should be 0
    assert.strictEqual(resultMatch, 0);

    // 2️⃣ Data that does NOT perfectly match the distribution
    // observed counts: 0 → 2, 1 → 1, 2 → 1, 3 → 0
    // expected counts (n * p) = 4 * 0.25 = 1 for each value
    // chi² = Σ (O‑E)² / E = (2‑1)²/1 + (1‑1)²/1 + (1‑1)²/1 + (0‑1)²/1 = 1 + 0 + 0 + 1 = 2
    const dataMismatch = [0, 0, 1, 2];
    const resultMismatch = ss.chiSquaredGoodnessOfF