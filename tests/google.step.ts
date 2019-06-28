import { Selector } from 'testcafe';
import {BeforeScenario, Step} from 'gauge-ts';
import testControllerHolder from './test_controller_holder';

var _;

export default class GoogleStep {

  @BeforeScenario()
  public async setup() {
    _ = await testControllerHolder.get();
  }

  @Step("Goto Google's search page")
  public async goToGoogle() {
    await _.navigateTo('http://google.com');
  }

  @Step("Search for <query>")
  public async searchFor(query: string) {
    var input = Selector('input[title="Search"]').with({ boundTestRun: _ });
    await _.typeText(input, query);
    await _.pressKey("enter");
  }

  @Step("First link is <text>")
  public async linkAssertion(text: string) {
    var firstLink = Selector('#rso').find('a').with({ boundTestRun: _ });
    await _.expect(firstLink.innerText).contains(text);
  };

}

