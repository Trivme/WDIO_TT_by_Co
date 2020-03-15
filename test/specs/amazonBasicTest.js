
const {expect} = require('chai');

describe("Amazon app script", () => {
  before(() => {
    browser.url("https://www.amazon.com/");
  });

  let pager;

  it('should check the Amazon title', () => {
    const title = 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more';
    browser.waitUntil(() => (browser.getTitle() === title ), 3000);
  });

  it('should search for product', () => {
    const searchField = $('//input[@id="twotabsearchtextbox"]');
    const submitBtn = $('//input[@type="submit"]');
    searchField.setValue('pencil');
    submitBtn.click();
    browser.pause(3000);
  });

   it('should wait for pager', () => {
     browser.waitUntil(() =>{
       return $('//span[@class="a-color-state a-text-bold"]').isDisplayed
     }, 3000);
   });

  // it('should sort searched products by decreasing price', () => {
  //   const sortDropDown = $('//select[@id="s-result-sort-select"]');
  //   sortDropDown.selectByVisibleText('Price: High to Low');
  //   console.log(sortDropDown.getValue());
  // });

  let findingHighestDiscountOnPage = () => {
    const products = $$('//div[@data-index]');
    let productQuantity = products.length;
    let ProductLink = '';
    let maxDiscount = 0;
    for(let j = 0; j < productQuantity; j++ ){
      if($(`//div[@data-index][${j}]//span[@class="a-price a-text-price"]`).isExisting()) {
        let regPrice = $(`//div[@data-index][${j}]//span[@class="a-price a-text-price"]`).getText() * 1;
        let discPrice = $(`div[@data-index][${j}]//span[@class="a-price"]`).getText() * 1;
        let discount = discPrice / regPrice * 100;
        if(discount > maxDiscount) {
          maxDiscount = discount;
          ProductLink = $('//div[@data-index][${j}]//a[class="a-link-normal a-text-normal"]');
        }
      }
    }

    return productQuantity;
  }
  it('should find quantity of products on the page', () => {

    console.log("Quantity products on the page 1 : " + findingHighestDiscountOnPage());
  });

  it('should go through pagination from firs to last search result pages', () => {
 //   const nextPager = 1;
     // $['//ul[@class="a-pagination"]//a[contains(text(), "Next")]'];
      driver.pause(5000);
 //   while(nextPager.isExisting()){

 //   }
  });

});