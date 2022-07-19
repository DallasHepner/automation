const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


describe('3 movie test', async () => {

    test('crossing of a movie', async () => {
        const inputField = await driver.findElement(By.xpath('//form/input'))
    
        await inputField.sendKeys('Ready Player One')
    
        await driver.sleep(2000)
    
        await driver.findElement(By.xpath('//form/button')).click()
    
        await driver.sleep(2000)
    
        await driver.findElement(By.xpath('//ul/li/span')).click()
    
        await driver.sleep(2000)
    })

    test('delete of a movie', async () => {
    
        await driver.findElement(By.xpath('//ul/li/button')).click()
    
        await driver.sleep(5000)
    })

    test('notifications are working', async () => {
        const inputField = await driver.findElement(By.xpath('//form/input'))
        await inputField.sendKeys('Shrek')
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//form/button')).click()
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//ul/li/span')).click()
        await driver.sleep(2000)
        
        expect(await driver.findElement(By.id('message')).isDisplayed()).toEqual(true)
    })

})