import { Selector } from 'testcafe';
import {BeforeScenario, Step} from 'gauge-ts';
import testControllerHolder from './test_controller_holder';

var _;

export default class DevexpressStep {

  @BeforeScenario()
  public async setup() {
    _ = await testControllerHolder.get();
  }

  @Step("Goto devexpress page")
  public async goToDevexpress() {
    await _.navigateTo('https://devexpress.github.io/testcafe/example');
  }

  @Step("Type in developer name: <developerName>, and submit")
  public async typeIn(developerName: string) {
    await _.typeText('#developer-name', developerName)
    await _.click('#submit-button');
  }

  @Step("Article header should be <text>")
  public async headerAssertion(text: string) {
    let articleHeader = Selector('#article-header').with({ boundTestRun: _ });
    await _.expect(articleHeader.innerText).eql(text);
  };

}

