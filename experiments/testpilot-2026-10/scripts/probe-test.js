let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('..');
describe('test simple_statistics', function() {
    it('test simple-statistics.mean', function(done) {
        assert.strictEqual(simple_statistics.mean([1, 2, 3]), 2);
        assert.throws(() => simple_statistics.mean([]));
        done();
    })
})
