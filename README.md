## Setup local TestRail server
You can setup your own local `TestRail` server with docker, please refer to this repo: [testrail-docker](https://github.com/cbreit/testrail-docker).


## Run test
First, please change `.env` parameters according to your setting up, then
```
source .env
npm install
npm test

```

## TestRail config
In TestRail, you have to change configuration to enable API, it's under: `Administration > Site Settings > API:Enable API`.

Before you write test, you have to create `test project`, `test suite` (in .env) and `test case`(we need to use its ID to write test so that we can upload corresponding test runs) first. Then you should change the test case ID in `test.ts` accordingly (e.g. change C2 to your own test case ID).


## More demos/examples:
1. Run with reporter:
```
npm run test-r
```

2. Run with headless:
```
npm run test-h
```

3. Run with headless and generate screenshot for failing tests:
```
npm run test-s
```

4. Run with headless and generate videos:
```
npm run test-s
```

5. Run with specific fixture meta:
```
npm run test-fm
```

6. Run with specific test meta:
```
npm run test-tm
```

7. Run with `gauge` example:
```
npm run gauge
```