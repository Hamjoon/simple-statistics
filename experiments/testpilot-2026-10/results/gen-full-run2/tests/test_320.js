let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.modeFast', function(done) {
        // Basic functionality – the most frequent element is returned
        assert.strictEqual(
            simple_statistics.modeFast(['rabbits', 'rabbits', 'squirrels']),
            'rabbits',
            'should return the element that appears most often'
        );

        // Tie handling – when counts are equal, the first encountered mode wins
        // (simple-statistics.modeFast keeps the first mode it sees in a tie)
        assert.strictEqual(
            simple_statistics.modeFast([1, 2, 2, 3, 3]),
            2,
            'should return the first encountered mode in a tie'
        );

        // Empty input should throw an Error
        assert.throws(
            () => simple_statistics.modeFast([]),
            /Error/,
            'should throw an error for an empty array'
        );

        done();
    });
});