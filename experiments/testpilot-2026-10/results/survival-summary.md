# Survival over 133 commits

| Corpus | Point at HEAD | Cumulative at HEAD | Denominator |
| --- | ---: | ---: | ---: |
| LLM S | 290 | 290 | 305 |
| Developer subtests | 299 | 299 | 309 |

Build failures: 0.

## ESM switch

| Commit | Require target | LLM point/cumulative | Dev point/cumulative | LLM load failures | Dev load failures |
| --- | --- | ---: | ---: | ---: | ---: |
| #81 | `./dist/simple-statistics.js` | 298/298 | 301/301 | 0 | 0 |
| #82 | `./dist/simple-statistics.cjs` | 298/298 | 301/301 | 0 | 0 |
| #83 | `./dist/simple-statistics.cjs` | 298/298 | 301/301 | 0 | 0 |

Killer failure kinds use recorded LLM messages; a developer `not ok` subtest with a nonzero TAP `notOkCount` is counted as an assertion, and one without it as a throw.

## Sanity checks

- Cumulative counts monotone: pass.
- t row: 305 LLM and 309 Dev subtests.
- 133 commit results or build failures: pass.
- 15 tagged rows: pass.
- No-change commit point-status equality: pass.
