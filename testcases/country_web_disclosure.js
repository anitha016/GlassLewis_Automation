browser.waitForAngularEnabled(false) // For non-angular web page

describe('Interact with Inputs', () => {
    it('Enter Country Name', async() => {
        browser.get("https://viewpoint.glasslewis.com/WD/?siteId=DemoClient");  // Open WebDisclosure site
        browser.driver.manage().window().maximize();//Maximize window for better view
        
        //Waiting for visibility of Element
        var EC = protractor.ExpectedConditions;
        var e1 = element(by.id('txt-multiselect-static-search-CountryFilter')); 
        browser.wait(EC.visibilityOf(e1), 10000);
        //Country filter is verified and "Belgium" is passed as value.
        e1.sendKeys('Belgium').then (() => {
            console.log("Country filter is available");
        });
        
        // Belgium is selected from country filter 
        var e2 = element(by.id("Belgium-cb-label-CountryFilter")); 
        browser.wait(EC.visibilityOf(e2), 10000);
        e2.click();

        // Country filter update button is clicked
        var e3 = element(by.xpath("(//button[@id='btn-update'])[2]")); 
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
        //Getting the row count of the table
        rows.count().then((count) => {
            //Looping through the rows of the Column - "Country" to verify if "Belgium" is present in every occurence
            for(let i = 1; i<=count;i++){
                var ele = element(by.css("tr:nth-child("+i+") td:nth-child(6)"));
                browser.wait(EC.visibilityOf(ele), 10000);
                expect(ele.getText()).toBe("Belgium").then(() => {
                    //Prints Every time "Belgium" occurs
                    console.log("Belgium Success = "+i);
                    //Row count should be equal to last value of i, which is equal to the number of occurences of Belgium (printed in the conssole)
                }).catch(() => {
                    //Prints when Belgium is not found in the table
                    console.log("Belgium Unsuccessful = "+i);
                })
            }
        });
    })
})
