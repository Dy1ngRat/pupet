const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Launch browser
    const page = await browser.newPage();

    // Intercept requests and responses
    await page.setRequestInterception(true);

    page.on('request', (request) => {
        console.log(`Request: ${request.url()}`);
        request.continue(); // Allow the request to proceed
    });

    page.on('response', (response) => {
        console.log(`Response: ${response.url()} - Status: ${response.status()}`);
    });

    try {
        // Navigate to the first page
        await page.goto('https://dy1ngrat.github.io/pupet/'); // Replace with your URL

        // Wait for navigation/redirection to complete
        await page.waitForNavigation();

        // Log the current URL (post-redirection)
        console.log('Final URL:', page.url());

        // Perform actions on the redirected page
        const pageTitle = await page.evaluate(() => document.title);
        console.log('Page Title:', pageTitle);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
})();
