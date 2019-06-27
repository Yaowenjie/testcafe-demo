import { Selector } from 'testcafe';
import config from './config';


fixture(`Getting Started`)
    .meta('smoke', 'true')
    .page(`${config.baseUrl}/testcafe/example`);


test('section2 | This is success testing example | C5', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
}).meta('env', 'prod');

test('section2 | This is failing testing example | C6', async t => {
    await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')

    .expect(Selector('#article-header').innerText).eql('Thank you, WJ!');
}).meta('env', 'dev');


