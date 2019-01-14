import assert from 'assert';
import puppeteer from 'puppeteer';
import A from '../lib/a.mjs'

describe('A with Puppeteer', () => {
  let browser, page;

  before(async () => {
    browser = await puppeteer.launch();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.exposeFunction('A', A);
  });

  after(async () => {
    await browser.close();
  });

  describe('page.evaluate()', () => {
    it('works', async () => {
      const o = await page.evaluate(() => {
        const a = new A(); // fails with: "Error: Evaluation failed: TypeError: A is not a constructor"
        return a.x;
      });
      assert.equal(o, 42);
    });
  });
});
