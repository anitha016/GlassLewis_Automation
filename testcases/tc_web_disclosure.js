browser.waitForAngularEnabled(false)

describe('Interact with Inputs', () => {
    it('Enter Country Name', async() => {
        browser.get("https://viewpoint.glasslewis.com/WD/?siteId=DemoClient");
        browser.driver.manage().window().maximize();
    browser.sleep(4000);

        //expect(browser.getTitle()).toEqual("Web Disclosure");

        
        var EC = protractor.ExpectedConditions;
        var e1 = element(by.id('kendo-Search-for-company'));
        browser.wait(EC.visibilityOf(e1), 10000); 
        e1.sendKeys('Activision');

        browser.sleep(10000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        
        browser.sleep(15000);
       // expect(element(by.id('detail-issuer-name')).getText()).toEqual('Activision Blizzard Inc');

       
    })
    browser.sleep(4000);
})
