

const {expect} = require('chai');

describe("Amazon app script", () => {
  before(() => {
    browser.url("https://www.amazon.com/");
  });

  it('should chedk tha Amazon title', () => {
    const title = 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more';
    browser.waitUntil(() => (browser.getTitle() === title ), 3000);
  });

  it('should find the product', () => {
    const searchField = $('//input[@id="twotabsearchtextbox"]');
    const submitBtn = $('//input[@type="submit"]');
    searchField.setValue('pencil');
    submitBtn.click();
    browser.waitUntil(() => $('//span[@cel_widget_id="PAGINATION-PAGINATION"]').isDisplayed()
      , 3000);
  });

  it('should sort searched products by decreasing price', () => {
    const sortDropDown = $('//select[@id="s-result-sort-select"]');
    sortDropDown.selectByVisibleText('Price: High to Low');
    console.log(sortDropDown.getValue());
  });




});