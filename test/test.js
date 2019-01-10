const assert = require('assert');

describe('A with Puppeteer', () => {
  const puppeteer = require('puppeteer');
  let browser, page;

  before(async () => {
    browser = await puppeteer.launch();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.addScriptTag({ path: __dirname + '/../lib/a.js' })
  });

  after(async () => {
    await browser.close();
  });

  describe('page.evaluate()', () => {
    it('works', async () => {
      const o = await page.evaluate(() => {
        return A;
      });
      assert.ok(o);
    });
  });
});
