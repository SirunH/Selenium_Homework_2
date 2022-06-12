# Second automation test with Selenium
## _Practice Page_


For the second automation test, the task is to check all items and  the assertions.
Below you can find the steps on how to do the task

1. Open the "https://www.rahulshettyacademy.com/AutomationPractice/#top"  page
2. Practice on Radio Button Example 
3. Practice on Suggession Class Example
4. Practice on Dropdown Example 
5. Practice on Checkbox Example
6. Practice on Switch Window Example
7. Practice on Switch Tab Example
8. Practice on Switch To Alert Example
9. Practice on Element Displayed Example
10. Practice on Web Table Fixed header
11. Practice on Mouse Hover Example
12. Practice on iFrame Example
- ✨Magic ✨



## Installation
Prerequisites of the Setup Configuration
-Node. js (comes bundled with npm, i.e. Node package manager). For those comfortable with using Maven in Java, consider this to be the equivalent package manager for JS.
-Any IDE to write the code.
**Step 1:Install Node.js npm**
One can download Node.js and npm, then check that it is installed by running the following commands in the terminal.

               *node -v*  (to check Node.js is installed) 
               *npm -v* (to check npm is installed)
Once the user has installed Node.js, they will get access to the npm, an inbuilt package manager which will be used to install Selenium for JS.

**Step 2: Install Selenium WebDriver**
One can download Selenium WebDriver, and install it by running the following command in the terminal by using the Node’s built-in package manager (NPM) to get the package.

                 *npm install –save selenium-webdriver*
(–save creates a new package. This would be saved to the project’s package.json file.)

From this page, get download links to the actual drivers that Selenium uses to command different browsers.

It is highly recommended to download links to drivers that the tester wants to work with (for example, Chrome and Firefox). Save them in a separate folder in separate directories and then add those folders to the system PATH. Once this is done,Selenium will be able to start the browser that the user tells it to, by using those executables.

**Step 3: Install Eclipse**
To perform Automation Testing, IDE is a platform that is required to write the test script and run the downloaded file.

**Step 4: Install Selenium Webdriver and Client language bindings**
Selenium WebDriver and client language bindings are important to establish a connection between the WebDriver and the client and perform testing. Here are the links to install the Selenium WebDriver and client language bindings:

Download
-JavaScript Language Bindings
-Changelog
-API Docs

## Best Practices for using JavaScript with Selenium WebDriver
Here are some of the best practices to follow while using JavaScript with Selenium for automated testing:

- **Use the Right Locators:** As the Selenium framework is meant to interact with the browser, it is essential to use the right locators for better navigation of the objects with the DOM (Document Object Model).
- **Perform Data-Driven Testing:** For accurate results, make sure the testing is data-driven, as it will help to perform functional testing faster.
- **Use PageObjects:** To enhance the overall maintenance and reduce redundancy and duplication, use PageObjects. Here the webpages are defined as classes, and the various elements on it are defined as variables, where the user interaction is implemented in the form of methods.
- **Choose the right selector order:** Selector Order is important for faster testing. Get the right Selector Order i.e. (XPath < CSS < Links Text < Name < ID) in place for better results. Learn about different locators in selenium.

Selenium WebDriver has made automation testing easier and more efficient than ever. By using JavaScript to create test scripts, it is easy to perform automated UI Testing for applications. This is useful especially when development cycles are short and the features have to be added every few weeks to keep up with the users’ demand.

Selenium is widely recommended due to the flexibility it offers. It supports major platforms like Windows, Linux, etc. and browsers like Chrome, IE, Edge, Firefox, and Safari as well as numerous scripts like Ruby, Perl, C#, Python, Java, JavaScript. With integrations of tools like TestNG Framework, one can get test results for further analysis, and improve the application.

To create an application with the optimal user experience, use cloud based Automation Selenium Testing tools like BrowserStack that offers access to over 2000 browsers and devices to test on. Test on a real device cloud in order to offer a seamless cross platform experience.



Requires 

```sh
node -v
npm -v
npm init
npm install selenium-webdriver

