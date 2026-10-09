let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRankSorted', function(done) {
        const testCases = [
            // examples from the documentation
            { arr: [1, 2, 3, 4],          val: 3, exp: 0.75 },
            { arr: [1, 2, 3, 3, 4],       val: 3, exp: 0.7  },
            { arr: [1, 2, 3, 4],          val: 6, exp: 1    },
            { arr: [1, 2, 3, 3, 5],       val: 4, exp: 0.8  },
            // edge cases
            { arr: [1, 2, 3, 4],          val: 0, exp: 0    },
            { arr: [1, 2, 3, 4],          val: 1, exp: 0.25 },
            // duplicate handling – expected value calculated manually
            // lowerBound = 1, l becomes 2, upperBound = 4, r = 3, mean = 3, mean/5 = 0.6
            { arr: [1, 2, 2, 2, 5],       val: 2, exp: 0.6  }
        ];

        testCases.forEach(({arr, val, exp}) => {
            const result = simple_statistics.quantileRankSorted(arr, val);
            assert.ok(
                Math.abs(result - exp) < 1e-12,
                `quantileRankSorted(${JSON.stringify(arr)}, ${val}) expected ${exp} but got ${result}`
            );
        });

        done();
    });
});