browser.waitForAngularEnabled(false) // For non-angular web page

describe('Interact with Inputs', () => {
    it('Enter Country Name', async() => {
        browser.get("https://viewpoint.glasslewis.com/WD/?siteId=DemoClient");  // Open WebDisclosure site
        browser.driver.manage().window().maximize();
    
        var EC = protractor.ExpectedConditions;
        var e1 = element(by.id('txt-multiselect-static-search-CountryFilter')); //Country filter is verified and "Belgium" is passed as value.
        browser.wait(EC.visibilityOf(e1), 10000);
        e1.sendKeys('Belgium').then (() => {
            console.log("country filter is available")
        });
        
        var e2 = element(by.id("Belgium-cb-label-CountryFilter")); // Belgium is selected from country filter
        browser.wait(EC.visibilityOf(e2), 10000);
        e2.click();

        var e3 = element(by.xpath("(//button[@id='btn-update'])[2]")); // Country filter update button is clicked
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
                    console.log("Belgium Success = "+i);
                }).catch(() => {
                    console.log("Belgium Unsuccessful = "+i);
                })
            }
        });
    })
})
