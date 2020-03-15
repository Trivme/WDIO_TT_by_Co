"use strict";

var _require = require('chai'),
    expect = _require.expect; //import MainPage from "./MainPage";


describe("Smoke testing for Asana webApp", function () {
  before(function () {
    browser.url("https://asana.com/");
    browser.pause(3000);
  });
  it('should wait correct page title', function () {
    console.log($('//h1').getText());
    expect($('//h1').getText()).eq('Make more time for the work that matters most');
  });
});
//# sourceMappingURL=main.spec.js.map