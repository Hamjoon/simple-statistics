let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');

describe('test simple_statistics', function () {
    it(observed, expected);

        // ---- 5. Determine the critical value for α = 0.05
        //    Degrees of freedom = (number of categories – 1 – number of estimated parameters)
        //    We estimated λ, so df = 5 – 1 – 1 = 3
        const df = 3;
        const critical = ss.chiSquaredCriticalValue(0.95, df); // 0.95 = 1 – α

        // ---- 6. The test should *not* reject the Poisson model:
        //    i.e., chi2 should be less than the critical value.
        assert.ok(chi2 < critical, `Chi‑squared = ${chi2} exceeds critical ${critical}`);

        // Signal Mocha that the async test is finished
        done();
    });
});