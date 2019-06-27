import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://devexpress.github.io/testcafe/example`;


test('section1 | This is success testing example | C5', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test('section1 | This is failing testing example | C6', async t => {
    await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')

    .expect(Selector('#article-header').innerText).eql('Thank you, WJ!');
});


