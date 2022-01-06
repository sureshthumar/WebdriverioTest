import { Given, When, Then } from "@wdio/cucumber-framework";
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";

Given(/^I am on the studentbeans homepage$/, async () => {
  await commonPage.openHomePage();

  await expect(homePage.btnLogin).toBePresent();
  await expect(homePage.img_Logo).toBePresent();
  await expect(homePage.btnSignUp).toBePresent();

  await homePage.clickOnCookies();
  await expect(homePage.acceptCookies).toBePresent();
});

When(/^I open the search bar$/, async () => {
  await homePage.clickOnSearchBox();
});

When(/^I enter "([^"]*)"$/, async (searchText) => {
  await homePage.inputText(searchText);
});

Then(
  /^I should be shown a search listing for "([^"]*)"$/,
  async (samsung) => {
    await expect(homePage.samsungResult).toHaveText(samsung);

    
  }
);
