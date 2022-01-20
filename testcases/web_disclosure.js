browser.waitForAngularEnabled(false)

describe('Interact with Inputs', () => {
    it('Enter Country Name', async() => {
        browser.get("https://viewpoint.glasslewis.com/WD/?siteId=DemoClient");
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual("Web Disclosure");

        var EC = protractor.ExpectedConditions;
        var e1 = element(by.id('txt-multiselect-static-search-CountryFilter'));
        browser.wait(EC.visibilityOf(e1), 10000);
        e1.sendKeys('Belgium');
        
        var e2 = element(by.xpath("/html/body/div[2]/div[2]/aside/div[4]/div/div[2]/fieldset/div/div/label"));
        browser.wait(EC.visibilityOf(e2), 10000);
        e2.click();

        var e3 =element(by.xpath("/html/body/div[2]/div[2]/aside/div[4]/div/div[2]/div[2]/button[1]"));
        browser.wait(EC.visibilityOf(e3), 10000);
        await e3.click().then(() => {
            browser.executeScript("document.body.style.zoom='70%'").then(() => {
                console.log("ZOOM OUT SUCCESSFUL");
            })
        })
        browser.sleep(4000);
    })

    it('Verify Country Name', async () => {
        var EC = protractor.ExpectedConditions;
        let table = element(by.css("table tbody"));   
        let rows = table.$$("tr");
        rows.count().then((count) => {
            for(let i = 1; i<=count;i++){
                var ele = element(by.css("tr:nth-child("+i+") td:nth-child(6)"));
                browser.wait(EC.visibilityOf(ele), 10000);
                expect(ele.getText()).toBe("Belgium").then(() => {
                    //console.log("Belgium Success = "+i);
                }).catch(() => {
                    console.log("Belgium Unsuccessful = "+i);
                })
            }
        });
    })
})