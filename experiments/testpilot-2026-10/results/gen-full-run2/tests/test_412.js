let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRank', function(done) {
        const cases = [
            { arr: [4, 3, 1, 2], value: 3, expected: 0.75 },
            { arr: [4, 3, 2, 3, 1], value: 3, expected: 0.7 },
            { arr: [2, 4, 1, 3], value: 6, expected: 1 },
            { arr: [5, 3, 1, 2, 3], value: 4, expected: 0.8 }
        ];

        cases.forEach(({arr, value, expected}) => {
            const result = simple_statistics.quantileRank(arr, value);
            assert.ok(
                Math.abs(result - expected) < 1e-12,
                `quantileRank(${JSON.stringify(arr)}, ${value}) expected ${expected} but got ${result}`
            );
        });

        done();
    });
});