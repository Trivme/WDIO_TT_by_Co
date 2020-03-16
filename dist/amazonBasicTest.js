"use strict";

var _require = require('chai'),
    expect = _require.expect;

describe("Amazon app script", function () {
  before(function () {
    browser.url("https://www.amazon.com/");
  });
  var pager;
  it('should check the Amazon title', function () {
    var title = 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more';
    browser.waitUntil(function () {
      return browser.getTitle() === title;
    }, 3000);
  });
  it('should search for product', function () {
    var searchField = $('//input[@id="twotabsearchtextbox"]');
    var submitBtn = $('//input[@type="submit"]');
    searchField.setValue('pencil');
    submitBtn.click();
    browser.pause(3000);
  });
  it('should wait for pager', function () {
    browser.waitUntil(function () {
      return $('//span[@class="a-color-state a-text-bold"]').isDisplayed;
    }, 3000);
  }); // it('should sort searched products by decreasing price', () => {
  //   const sortDropDown = $('//select[@id="s-result-sort-select"]');
  //   sortDropDown.selectByVisibleText('Price: High to Low');
  //   console.log(sortDropDown.getValue());
  // });

  var findingHighestDiscountOnPage = function findingHighestDiscountOnPage() {
    var products = $$('//div[@data-index]');
    var productQuantity = products.length;
    var ProductLink = '';
    var maxDiscount = 0;

    for (var j = 0; j < productQuantity; j++) {
      if ($("//div[@data-index][".concat(j, "]//span[@class=\"a-price a-text-price\"]")).isExisting()) {
        var regPrice = $("//div[@data-index][".concat(j, "]//span[@class=\"a-price a-text-price\"]")).getText() * 1;
        var discPrice = $("div[@data-index][".concat(j, "]//span[@class=\"a-price\"]")).getText() * 1;
        var discount = discPrice / regPrice * 100;

        if (discount > maxDiscount) {
          maxDiscount = discount;
          ProductLink = $('//div[@data-index][${j}]//a[class="a-link-normal a-text-normal"]');
        }
      }
    }

    return productQuantity;
  };

  it('should find quantity of products on the page', function () {
    console.log("Quantity products on the page 1 : " + findingHighestDiscountOnPage());
  });
  it('should go through pagination from firs to last search result pages', function () {
    //   const nextPager = 1;
    // $['//ul[@class="a-pagination"]//a[contains(text(), "Next")]'];
    driver.pause(5000); //   while(nextPager.isExisting()){
    //   }
  });
});
//# sourceMappingURL=amazonBasicTest.js.map