// test_simple_statistics.js
const assert = require('assert');
const ss = require('simple-statistics');

describe('test simple_statistics', function () {
  it('test simple-statistics.probit', function () {
    // 0.5 should map to the median of the standard normal (0)
    const median = ss.prob