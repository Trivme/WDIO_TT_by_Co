"use strict";

var _MainPage = _interopRequireDefault(require("./MainPage"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var _require = require('chai'),
    expect = _require.expect;

describe('ASANA testing', function () {
  before('open page', function () {
    _MainPage["default"].open();
  });
  it('should wait correct Page title', function () {
    browser.waitUntil(function () {
      return _MainPage["default"].H1.isDisplayed();
    }); //=== 'Make more time for the work that matters most', 5000);
  });
}); //describe("Smoke testing for Asana webApp", () => {
//  before(() => {
//    browser.url("https://asana.com/")
//  });
//
//  it('should wait correct page title', () => {
//    browser.waitUntil(() => {
//      return $('//h1').isDisplayed()
//    }, 5000, "********** Can't find the title **********");
//
//    const title = $('h1');
//    try {
//      expect(title.getText()).eq('Make more time for the work that matters most');
//      expect(title.getText()).eq('Keep your team organized and connected');
//    } catch (err) {
//      console.log('Changed title');
//    }
//  });
//
//  it('should open Why Asana menu', () => {
//  //  $('//div[@id="navigation__dropdown-why-asana"]').waitForDisplayed();
//   // $('//div[@id="navigation__dropdown-why-asana"]').click();
//    browser.pause(5000);
//
//    //expect($('//h3[@id="navigation__dropdown__column-label-overview"]').getText()).eq('Overview');
//  });
//
// // it('should check Asana Overview link', () => {
// //   const asanaOverviewLink = $('//a[@class="navigation__dropdown__card"][@href="/product"]');
// //   asanaOverviewLink.click();
// //   browser.pause(5000);
////
// // });
//
//});
//# sourceMappingURL=main.spec.js.map