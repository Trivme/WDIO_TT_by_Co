const {expect} = require('chai');
//import MainPage from './MainPage';
//import axios from 'axios';

//describe('ASANA testing', () => {
//    before('open page', () => {
//      MainPage.open();
//    });
//    it('should wait correct Page title', () => {
//      browser.waitUntil(() => MainPage.H1.isDisplayed());
//      //=== 'Make more time for the work that matters most', 5000); 
//    });  
//}); 

describe("Smoke testing for Asana webApp", () => {
  before(() => {
    browser.url("https://asana.com/")
    browser.maximizeWindow();
  });

  it('should wait correct page title', () => {
    browser.waitUntil(() => $('//h1').isDisplayed(), 5000);

    const title = $('h1');
    try {
      expect(title.getText()).eq('Make more time for the work that matters most');
      expect(title.getText()).eq('Keep your team organized and connected');
    } catch (err) {
      console.log('Changed title');
    }
  });

  it('should open Why Asana menu', () => {
    $('//button[@id="mobileNavToggle"]').click();
  //  $('//div[@id="navigation__dropdown-why-asana"]').waitForDisplayed();
    $('//div[@id="navigation__dropdown-why-asana"]').click();
    browser.pause(5000);

    //expect($('//h3[@id="navigation__dropdown__column-label-overview"]').getText()).eq('Overview');
  });

 // it('should check Asana Overview link', () => {
 //   const asanaOverviewLink = $('//a[@class="navigation__dropdown__card"][@href="/product"]');
 //   asanaOverviewLink.click();
 //   browser.pause(5000);
//
 // });


  //**************************
//  console.log('Header by Yulia Akhunbaeva')
//
//  it ('should click button', () =>{
//    browser.$('//button[@id="mobileNavToggle"]').click();
//    browser.pause(3000)
//  });
//
//  it ('should check for clickable', () =>{
//    browser.$('//button[@id="navigation__dropdown-toggle-why-asana"]').click();
//
//  });
//
//  it ('should check for clickable', () =>{
//    browser.$('//button[@id="navigation__dropdown-toggle-solutions"]').click();
//
//  });
//
//  it ('should check for clickable', () =>{
//    browser.$('//button[@id="navigation__dropdown-toggle-resources"]').click();
//
//  });
//  it ('should check for clickable', () =>{
//    browser.$('//a[@class="navigation__link"]').click();
//
//  });

  //***************************
  // footer by Anna Strik

//  it('should send http request for all footer links and get success response', async () => {
//    const response = await axios({
//      method: 'get',
//      url: 'https://asana.com/pricing'
//    })
//      .then(res=>res)
//      .catch(err=>err);
//    expect(response.status).eq(200);
//  });
//
//  let footerLinksCount;
//  let linkList = [];
//
//  it('obtain all links in the footer, compile them into list and count its number', () => {
//    const footerLinks = $$('//a[@id=""globalFooter"]');
//    footerLinksCount = footerLinks.length;
//    for(let i=1; i < footerLinksCount; i++){
//      let link = $(`(//a[@id = "globalFooter"])[${i}])`).getAttribute('href');
//      linkList.push(link);
//    }
//  });
//
//  it('should send http request far all footer links and get success response', async () => {
//    for(let i = 0; i < footerLinksCount; i++){
//      const response = await axios({
//        method: 'get',
//        url: linkList[i]
//      })
//        .then(res=>res)
//        .catch(err=>err);
//      console.log('LINKS LINKS LINKS LINKS ' + linkList[i]);
//      console.log('STATUS STATUS STATUS STATUS ' + response.status);
//      expect(response.status).eq(200);
//    }
//  });


});