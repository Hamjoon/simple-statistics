// Assemble prompt variants for selected functions with testpilot2's Prompt class.
// Usage: node build-prompt-examples.js <api.json> <templateFile> <retryTemplateFile> <outDir> <tag>
const fs = require("fs");
const path = require("path");
const { Prompt, defaultPromptOptions } = require("/work/testpilot2/dist/promptCrafting");
const { APIFunction } = require("/work/testpilot2/dist/exploreAPI");

const [apiFile, templateFile, retryTemplateFile, outDir, tag] = process.argv.slice(2);
if (![apiFile, templateFile, retryTemplateFile, outDir, tag].every(Boolean)) {
  console.error("Expected <api.json> <templateFile> <retryTemplateFile> <outDir> <tag>");
  process.exit(2);
}
const api = JSON.parse(fs.readFileSync(apiFile, "utf8"));
const snippetMap = Object.fromEntries(
  JSON.parse(fs.readFileSync(path.join(path.dirname(apiFile), "snippetMap.json"), "utf8"))
);
const targets = [
  "simple-statistics.average",
  "simple-statistics.linearRegression",
  "simple-statistics.BayesianClassifier.prototype.train",
];
const variants = {
  base: {},
  doc: { includeDocComment: true },
  "doc-body-snippets": {
    includeDocComment: true,
    includeFunctionBody: true,
    includeSnippets: true,
  },
};
fs.mkdirSync(outDir, { recursive: true });
for (const accessPath of targets) {
  const entry = api.find((item) => item.accessPath === accessPath);
  if (!entry) {
    console.error("missing", accessPath);
    process.exitCode = 1;
    continue;
  }
  const fun = new APIFunction(entry.accessPath, entry.descriptor, "simple-statistics");
  const snippets = snippetMap[fun.functionName] ?? [];
  for (const [name, flags] of Object.entries(variants)) {
    const options = {
      ...defaultPromptOptions(),
      templateFileName: templateFile,
      retryTemplateFileName: retryTemplateFile,
      ...flags,
    };
    const prompt = new Prompt(fun, snippets, options).assemble();
    const file = path.join(outDir, `${accessPath}.${name}.${tag}.txt`);
    fs.writeFileSync(file, prompt);
    console.log(file, prompt.length, "chars", "docComment:", !!entry.descriptor.docComment, "snippets:", snippets.length);
  }
}
