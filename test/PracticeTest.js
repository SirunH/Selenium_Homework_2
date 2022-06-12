const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const path = require('chromedriver').path;
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { elementLocated } = require('selenium-webdriver/lib/until');
const { default: reloadSession } = require('webdriverio/build/commands/browser/reloadSession');
const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;

describe(" Chacking Practice Page", () => {
    let driver
    let url = "https://www.rahulshettyacademy.com/AutomationPractice/";
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(url);
        await driver.manage().window().maximize();
    })
    afterEach(async function() {
        await driver.quit()
    });
    it("Check if we are in correct page", async function() {
        let currentUrl = await driver.getCurrentUrl().then(function(val) {
            return val;
        });
        assert.strictEqual(currentUrl, url); //passed assertion, no problem
    });

    it("Radio Button Example", async function() {
        let radioButton2 = await driver.findElement(By.xpath("//input[@value = 'radio2']")).click();
        driver.manage().setTimeouts({ implicit: 2000 });
        let rBut2 = await driver.findElement(By.xpath("//input[@value = 'radio2']")).isSelected();
        expect(await rBut2).to.be.true; //passed assertion, no problem
    });
    /* it("Suggession Class Example", async function() {
         let typeCountry = await driver.findElement(By.xpath("//input[@class='inputs ui-autocomplete-input']")).sendKeys("Ar");
         driver.manage().setTimeouts({ implicit: 2000 });
         let listElements = await driver.findElement(By.xpath("//ul[@class='ui-menu ui-widget ui-widget-content ui-autocomplete ui-front']")).getText();
         let typeItem = await driver.findElement(By.xpath("//*[@class='ui-menu-item-wrapper'][text()='Armenia']"));
         driver.manage().setTimeouts({ implicit: 2000 });
         //await driver.wait(until.elementLocated(By.xpath("//*[@class='ui-menu-item-wrapper'][text()='Armenia']")));
         let clickCountry = await typeItem.click();
         let selectedCountry = await driver.findElement(By.xpath('//*[@id="autocomplete"]')).getText();
         expect(await selectedCountry).equal("Armenia"); //not passed, problem with assertions
     });*/
    it("Dropdown Example", async function() {
        let dropDownBox = await driver.findElement(By.id("dropdown-class-example")).click();
        let selectOption = await driver.findElement(By.xpath("//*[@id='dropdown-class-example']/option[2]"));
        await driver.wait(until.elementLocated(By.xpath("//*[@id='dropdown-class-example']/option[2]")));
        await selectOption.click();
        let selectedOP = await selectOption.getText();
        expect(await selectedOP).to.equal("Option1"); //passed assertion, no problem
    });
    it("Checkbox Example", async function() {
        let checkBox3 = await driver.findElement(By.id("checkBoxOption3"));
        await checkBox3.click();
        driver.manage().setTimeouts({ implicit: 2000 });
        expect(await checkBox3.isSelected()).to.be.true; //passed assertion, no problem
    });
    /* it("Switch Window Example", async function() {
         const originalWindow = await driver.getWindowHandle();
         assert((await driver.getAllWindowHandles()).length === 1);
         let openNewWindow = await driver.findElement(By.id("openwindow"));
         await openNewWindow.click();
         driver.manage().setTimeouts({ implicit: 2000 });
         await driver.wait(
             async() => (await driver.getAllWindowHandles()).length === 2,
             10000
         );
         let newWindow = await driver.wait(until.titleIs('qaclickacademy.com/'));
         // let newWindow = await driver.switchTo().window();
         // await expect(newWindow).toHaveUrl("http://www.qaclickacademy.com/");
         //await driver.switchTo().window(originalWindow);
         expect(await openNewWindow).to.contain("http://www.qaclickacademy.com/"); //not passed, problem with assertions
     });*/
    /* it("Switch Tab Example Open Tab", async function() {
         const originalWindow = await driver.getWindowHandle();
         assert((await driver.getAllWindowHandles()).length === 1);
         let openNewTab = await driver.findElement(By.id("opentab"));
         await openNewTab.click();
         driver.manage().setTimeouts({ implicit: 2000 });
         await driver.wait(
             async() => (await driver.getAllWindowHandles()).length === 2,
             10000
         );
         let newTab = await driver.wait(until.titleIs('rahulshettyacademy.com/'));
         //await driver.switchTo().window(originalWindow);
         expect(await newTab).to.equal("https://www.rahulshettyacademy.com/");  //not passed, problem with assertions
         await driver.close()
     });*/
    it("Switch To Alert Example", async function() {
        let enterName = await driver.findElement(By.id("name")).sendKeys("Want to check");
        let alertButton = await driver.findElement(By.id("alertbtn"));
        await alertButton.click();
        let alBtn = driver.switchTo().alert().getText();
        driver.manage().setTimeouts({ implicit: 2000 });
        driver.switchTo().alert().accept();
        expect(await alBtn).include("Hello Want to check, share this practice page and share your knowledge"); //passed assertion, no problem
    });
    it("Element Displayed Example", async function() {
        let displayedText = driver.findElement(By.id("displayed-text")).sendKeys("Want to check");
        let hideButton = await driver.findElement(By.id("hide-textbox"));
        await hideButton.click();
        driver.manage().setTimeouts({ implicit: 2000 });
        let showButton = await driver.findElement(By.id("show-textbox"));
        await showButton.click();
        expect(await hideButton.isDisplayed()).to.be.true;
        expect(await showButton.isDisplayed()).to.be.true; //passed assertion, no problem
    });
    it("Web Table Fixed header", async function() {
        let webTable = await driver.findElement(By.xpath("//*[@class='tableFixHead']")).click();
        let tabletext = await driver.findElement(By.xpath("//fieldset[2]/div[1]/table/tbody/tr[8]/td[3]")).getText();
        expect(await tabletext).contains("Chennai"); //passed assertion, no problem
    });
    it("Mouse Hover Example", async function() {
        let mouseHover = await driver.findElement(By.xpath("//*[@id='mousehover']"));
        await mouseHover.click();
        let submouseHover = await driver.findElement(By.xpath("//*[@class='mouse-hover-content'] /a[2]")).click();
        driver.manage().setTimeouts({ implicit: 6000 });
        let reload = await driver.findElement(By.xpath("//h1[text()='Practice Page']")).getText();
        expect(await reload).to.be.equal("Practice Page"); //passed assertion, no problem
    });
    it("iFrame Example", async function() {
        let iframe = await driver.findElement(By.id("courses-iframe"));
        await driver.switchTo().frame("courses-iframe");
        let iframeSelected = await driver.findElement(By.xpath("//h3[text() ='Consulting']")).click();
        driver.manage().setTimeouts({ implicit: 100000 });
        let openedIframe = await driver.findElement(By.xpath("//h3[text()='Testimonial']")).getText();
        driver.manage().setTimeouts({ implicit: 6000 });
        expect(await openedIframe).to.contain("Testimonial"); //passed assertion, but  with it.only problem-error"NoSuchWindowError: no such window"
    });

});
//});