Your task is to write a test for the following function
```
simple-statistics.quickselect(arr, k, left, right)
```

This function is defined as follows:
```
function quickselect(arr, k, left, right) {
    left = left || 0;
    right = right || arr.length - 1;

    while (right > left) {
        // 600 and 0.5 are arbitrary constants chosen in the original paper to minimize execution time
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp((2 * z) / 3);
            var sd = 0.5 * Math.sqrt((z * s * (n - s)) / n);
            if (m - n / 2 < 0) { sd *= -1; }
            var newLeft = Math.max(left, Math.floor(k - (m * s) / n + sd));
            var newRight = Math.min(
                right,
                Math.floor(k + ((n - m) * s) / n + sd)
            );
            quickselect(arr, k, newLeft, newRight);
        }

        var t = arr[k];
        var i = left;
        var j = right;

        swap(arr, left, k);
        if (arr[right] > t) { swap(arr, left, right); }

        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
            while (arr[i] < t) { i++; }
            while (arr[j] > t) { j--; }
        }

        if (arr[left] === t) { swap(arr, left, j); }
        else {
            j++;
            swap(arr, j, right);
        }

        if (j <= k) { left = j + 1; }
        if (k <= j) { right = j - 1; }
    }
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quickselect', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```