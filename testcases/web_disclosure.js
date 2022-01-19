// describe('Protractor Demo', function() {
//    it('to check the page title', function() {
//     browser.ignoreSynchronization = true;
//     browser.get('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient/');
//     browser.wait(20000)
//     browser.driver.getTitle().then(function(pageTitle) {
//     expect(pageTitle).toEqual('Software Testing Help - A Must Visit Software Testing Portal');
//     });
//    });
//     });


// describe('angularjs homepage', function() {
//     it('should greet the named user', function() {
//       browser.get('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient');
  
//       element(by.model('yourName')).sendKeys('Julie');
  
//       var greeting = element(by.binding('yourName'));
  
//       expect(greeting.getText()).toEqual('Hello Julie!');
//     });
// });

// function myFunction() {
//     window.open("https://www.w3schools.com");
//   }

// browser.waitForAngularEnabled(false)
// describe('Demo App', function() {
//     it(function() {
//       browser.get('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient');
  
//       //expect(browser.getTitle()).toEqual('Glass Lewis');
//     });
//   });
browser.waitForAngularEnabled(false)
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient');
      browser.driver.manage().window().maximize();
      //getPageTimeout: 120000; 
      expect(browser.getTitle()).toEqual("Web Disclosure");
     // var el = element(filterid-CountryFilter);
    //   browser.actions()
    // .mouseMove(el) 
    // .click()
    //anitha
    // .perform();
      browser.sleep(10000);
      
     // browser.manage().timeouts().implicitlyWait(20000);
    //   browser.wait(20000);
    //   var started = startTestServer();
    //   browser.wait(started, 5 * 1000, 'Server should start within 5 seconds');
      //browser.get(getServerUrl());
    //   element(by.model('first')).sendKeys(1);
    //   element(by.model('second')).sendKeys(2);
  
    //   element(by.id('gobutton')).click();
  
    //   expect(element(by.binding('latest')).getText()).
    //       toEqual('5'); // This is wrong!
    });
  });