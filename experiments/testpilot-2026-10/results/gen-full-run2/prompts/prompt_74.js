The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it(dataMatch, uniformDist, 0.05);
        // chi‑squared = 0 → should NOT reject (false)
        assert.strictEqual(resultMatch, false, 'Uniform data should not be rejected');

        // 2️⃣ Data that deviates strongly from the hypothesised distribution
        const dataBad = [0, 0, 0, 0];
        const resultBad = simple_statistics.chiSquaredGoodnessOfF})
``` 
failed with the following error message:
```

ReferenceError: dataMatch is not defined
    at Suite.<anonymous> (/path/to/test/test_72.js:5:8)
    at Object.create (/work/testpilot2/node_modules/mocha/lib/interfaces/common.js:148:19)
    at context.describe.context.context (/work/testpilot2/node_modules/mocha/lib/interfaces/bdd.js:42:27)
    at Object.<anonymous> (/path/to/test/test_72.js:4:1)
    at Module._compile (node:internal/modules/cjs/loader:1781:14)
    at Module.replacementCompile (/work/testpilot2/node_modules/append-transform/index.js:60:13)
    at node:internal/modules/cjs/loader:1913:10
    at Object.<anonymous> (/work/testpilot2/node_modules/append-transform/index.js:64:4)
    at Module.load (node:internal/modules/cjs/loader:1505:32)
    at Function._load (node:internal/modules/cjs/loader:1309:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
    at loadCJSModuleWithModuleLoad (node:internal/modules/esm/translators:335:3)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:235:7)
    at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:681:26)
    at async formattedImport (/work/testpilot2/node_modules/mocha/lib/nodejs/esm-utils.js:7:14)
    at async exports.requireOrImport (/work/testpilot2/node_modules/mocha/lib/nodejs/esm-utils.js:38:28)
    at async exports.loadFilesAsync (/work/testpilot2/node_modules/mocha/lib/nodejs/esm-utils.js:91:20)
    at async singleRun (/work/testpilot2/node_modules/mocha/lib/cli/run-helpers.js:125:3)
    at async exports.handler (/work/testpilot2/node_modules/mocha/lib/cli/run.js:370:5)
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.