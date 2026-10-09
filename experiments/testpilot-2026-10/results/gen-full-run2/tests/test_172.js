// test/simple-statistics-gamma.test.js
const assert = require('assert');
const ss = require('simple-statistics');   // import the library

// Mocha provides `describe`/`it` globally – no need to require it explicitly.
describe('simple-statistics.gamma', function () {
  it('should compute the gamma function correctly', function () {
    // Integer arguments: gamma(n) = (n‑1)!
    assert.strictEqual(ss.gamma(1), 1);
    assert.strictEqual(ss.gamma(2), 1);
    assert.strictEqual(ss.gamma(3), 2);
    assert.strictEqual(ss.gamma(4), 6);
    assert.strictEqual(ss.gamma(5), 24);

    // Non‑integer argument: gamma(0.5) = √π
    const expected = Math.sqrt(Math.PI);
    const result   = ss.gamma(0.5);
    const tolerance = 1e-12;
    assert.ok(
      Math.abs(result - expected) < tolerance,
      `gamma(0.5) ≈ ${expected}, got ${result}`
    );
  });
});