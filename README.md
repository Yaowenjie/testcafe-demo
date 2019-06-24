## Setup local Testrail Server
You can setup your own local `TestRail` server with docker, please refer to this repo: [testrail-docker](https://github.com/cbreit/testrail-docker).


## Run test
First, please change .env parameters according to your setting up, then
```
source .env
npm install
npm run test

```

## TestRail config
In TestRail, you have to change configuration to enable API, it's under: `Administration > Site Settings > API:Enable API`.
Before you write test, you have to create test project, test suite (in .env) and test case (we need to use its ID to write test so that we can upload corresponding test runs) first.
