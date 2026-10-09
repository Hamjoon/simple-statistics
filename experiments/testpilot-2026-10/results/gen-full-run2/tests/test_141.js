let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdNormalProbability', function(done) {
        // Use a looser tolerance – simple-statistics returns values rounded to
        // about 4‑5 decimal places, so 1e-4 is sufficient for the test.
        const epsilon = 1e-4;

        const cases = [
            { z: 0,   expected: 0.5 },
            { z: 1,   expected: 0.8413447460685429 },
            { z: -1,  expected: 0.15865525393145707 },
            { z: 3,   expected: 0.9986501019683699 },
            { z: -3,  expected: 0.0013498980316301035 },
            { z: 6,   expected: 0.9999999990134123 },
            { z: -6,  expected: 9.865877e-10 }
        ];

        cases.forEach(({ z, expected }) => {
            const result = simple_statistics.cumulativeStdNormalProbability(z);
            assert.ok(
                Math.abs(result - expected) < epsilon,
                `cumulativeStdNormalProbability(${z}) expected ${expected}, got ${result}`
            );
        });

        done();
    });
});