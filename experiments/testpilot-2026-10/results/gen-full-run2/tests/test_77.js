let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.chiSquaredGoodnessOfFit', function (done) {
        // Data from Poisson goodness‑of‑fit example 10‑19 in
        // William W. Hines & Douglas C. Montgomery,
        // "Probability and Statistics in Engineering and Management Science", Wiley (1980).
        const data1019 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2,
            3, 3, 3, 3
        ];

        // ---- 1. Estimate λ (the Poisson mean) from the data
        const lambda = ss.mean(data1019);

        // ---- 2. Build observed frequencies for the categories we will use
        //    (0, 1, 2, 3, and "4 or more" combined)
        const n = data1019.length;
        const observed = [0, 0, 0, 0, 0]; // 0‑3 and 4+
        data1019.forEach(v => {
            if (v >= 4) observed[4] += 1;
            else observed[v] += 1;
        });

        // ---- 3. Compute expected frequencies using the Poisson pmf
        const poissonPMF = ss.poissonDistribution(lambda);
        const expected = [
            n * poissonPMF(0),
            n * poissonPMF(1),
            n * poissonPMF(2),
            n * poissonPMF(3),
            // probability of 4 or more = 1 - sum_{k=0}^{3} P(k)
            n * (1 - (poissonPMF(0) + poissonPMF(1) + poissonPMF(2) + poissonPMF(3)))
        ];

        // ---- 4. Compute the chi‑squared statistic
        const chi2 = ss.chiSquaredGoodnessOfF    })
})