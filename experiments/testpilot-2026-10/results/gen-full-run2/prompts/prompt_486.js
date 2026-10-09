The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.wilcoxonRankSum', function(done) {
        // All values in X are lower than Y → U = 0
        const u1 = simple_statistics.wilcoxonRankSum([1, 2, 3], [4, 5, 6]);
        assert.strictEqual(u1, 0);

        // All values in X are higher than Y → U = nX * nY = 3 * 3 = 9
        const u2 = simple_statistics.wilcoxonRankSum([4, 5, 6], [1, 2, 3]);
        assert.strictEqual(u2, 9);

        // Mixed ordering: X = [1,3,5], Y = [2,4,6]
        // Ranks: 1→1, 2→2, 3→3, 4→4, 5→5, 6→6
        // Sum of ranks for X = 1 + 3 + 5 = 9
        // U = sumRanksX - nX*(nX+1)/2 = 9 - 3*4/2 = 3
        const u3 = simple_statistics.wilcoxonRankSum([1, 3, 5], [2, 4, 6]);
        assert.strictEqual(u3, 3);

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

6 !== 0
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.