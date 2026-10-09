let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.meanSimple', function(done) {
        // Verify correct mean calculation
        const data = [0, 10, 20];
        const expectedMean = 10;
        assert.strictEqual(simple_statistics.meanSimple(data), expectedMean);

        // Verify that an empty array throws the expected error
        assert.throws(
            () => simple_statistics.meanSimple([]),
            /meanSimple requires at least one data point/
        );

        done();
    });
});