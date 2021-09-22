
const { Builder, Capabilities, By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
});

test("Should input a movie to the page", async () => {
    await driver.findElement(By.xpath('//input')).sendKeys("Inception\n")
    await driver.sleep(4000)
})

test("Should delete movie", async () => {
    await driver.findElement(By.xpath('//input')).sendKeys("Harry Potter\n")
    await driver.sleep(3000)


    await driver.findElement(By.id('HarryPotter')).click()
    await driver.sleep(3000)
})

test("Should cross off movie", async () => {
    await driver.findElement(By.xpath('//input')).sendKeys("Plato\n")
    await driver.sleep(1000)

    await driver.findElement(By.xpath('(//li/span)[2]')).click()
    await driver.sleep(1000)
})