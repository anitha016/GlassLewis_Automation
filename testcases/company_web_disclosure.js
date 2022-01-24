browser.waitForAngularEnabled(false) //For non-angular webpage

describe('Glass Lewis Project', () => {
    it('Open WebDisclosure site', async() => {
        browser.get("https://viewpoint.glasslewis.com/WD/?siteId=DemoClient"); // Open WebDisclosure site
        browser.driver.manage().window().maximize();
        browser.sleep(4000);
       
        var EC = protractor.ExpectedConditions;
        var e1 = element(by.id('kendo-Search-for-company')); //Click on the search and pass the company name as "Activision" and select it.
        browser.wait(EC.visibilityOf(e1), 10000); 
        e1.sendKeys('Activision');
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(10000);
        expect(element(by.xpath("(//*[@id='detail-issuer-name'])")).getText()).toEqual('Activision Blizzard Inc').then(()=> {
           console.log("Activision Blizzard Inc is Found"); //Verfiying the Company banner
       });
    })
})
