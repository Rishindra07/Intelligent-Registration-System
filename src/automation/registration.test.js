import { Builder, By, until } from 'selenium-webdriver';
import 'chromedriver';
import fs from 'fs';

(async function runTest() {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {

    // -------------------
    // OPEN PAGE
    // -------------------

    await driver.get("http://localhost:5173");

    console.log("URL:", await driver.getCurrentUrl());
    console.log("TITLE:", await driver.getTitle());

    // -------------------
    // NEGATIVE FLOW
    // -------------------

    console.log("Running Negative Flow");

    await driver.findElement(By.id("firstName"))
      .sendKeys("Rishindra");

    // lastName skipped

    await driver.findElement(By.id("email"))
      .sendKeys("user@gmail.com");

    await driver.findElement(By.id("phone"))
      .sendKeys("+919876543210");

    await driver.findElement(By.id("gender"))
      .sendKeys("Male");

    await driver.findElement(By.id("country"))
      .sendKeys("India");

    await driver.sleep(500);

    await driver.findElement(By.id("state"))
      .sendKeys("Telangana");

    await driver.findElement(By.id("city"))
      .sendKeys("Hyderabad");

    await driver.findElement(By.id("password"))
      .sendKeys("Test123");

    await driver.findElement(By.id("confirmPassword"))
      .sendKeys("Test123");

    await driver.findElement(By.id("terms")).click();

    await takeShot(driver, "src/automation/screenshots/error-state.png");

    // -------------------
    // POSITIVE FLOW
    // -------------------

    console.log("Running Positive Flow");

    await driver.findElement(By.id("lastName"))
      .sendKeys("Karrolla");

    await driver.findElement(By.id("submitBtn")).click();

    await driver.sleep(1000);

    await takeShot(driver, "src/automation/screenshots/success-state.png");

    // -------------------
    // LOGIC FLOW
    // -------------------

    console.log("Running Logic Validation");

    const pwd = await driver.findElement(By.id("password"));
    await pwd.sendKeys("abc");
    await driver.sleep(800);
    await pwd.clear();
    await pwd.sendKeys("Abc12345");

    const cp = await driver.findElement(By.id("confirmPassword"));
    await cp.clear();
    await cp.sendKeys("Wrong123");

    await takeShot(driver, "src/automation/screenshots/password-mismatch.png");

    await driver.findElement(By.id("country"))
      .sendKeys("USA");

    await driver.sleep(800);

    await takeShot(driver, "src/automation/screenshots/dropdown-update.png");

    console.log("Automation Completed Successfully");

  } catch (err) {
    console.error("Test Failed:", err);
  }

  await driver.quit();

})();


// -------------------
// SCREENSHOT HELPER
// -------------------

async function takeShot(driver, path) {
  const image = await driver.takeScreenshot();
  fs.writeFileSync(path, image, 'base64');
}
