import {BeforeSpec, AfterSpec} from 'gauge-ts';
import testControllerHolder from './test_controller_holder';

const fs                   = require('fs');
const createTestCafe       = require('testcafe');

function createTestFile() {
  fs.writeFileSync('test.ts',
      'import { Selector } from "testcafe";\n\n' +
      'import testControllerHolder from "./tests/test_controller_holder";\n\n' +
      'fixture("fixture")\n' +
      'test("test", testControllerHolder.capture);');
}

function runTest() {
  var runner = null;

  createTestCafe()
  .then(function (tc) {
    let testcafe = tc;
    runner   = tc.createRunner();

    return runner
    .src('./test.ts')
    .browsers('chrome')
    .run()
    .catch(function (error) {
      console.log(error);
    });
  })
  .then(function (report) {
    console.log(report);
  });
}

export default class StepImpl {
  @BeforeSpec()
  public async setup() {
    console.log("setup needs to done before running the Scenario");
    createTestFile();
    runTest();
  }

  @AfterSpec()
  public async cleanUp() {
    console.log("clean up needs to done after running the Scenario");
    testControllerHolder.free();
    fs.unlinkSync('test.ts');
  }
}
