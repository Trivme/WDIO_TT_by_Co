const {expect} = require('chai');
//import MainPage from "./MainPage";

describe("Smoke testing for Asana webApp", () => {
  before(() => {
    browser.url("https://asana.com/")
    browser.pause(3000);
  });

  it('should wait correct page title', () => {
    console.log( $('//h1').getText());
    expect($('//h1').getText()).eq( 'Make more time for the work that matters most');


  });
});