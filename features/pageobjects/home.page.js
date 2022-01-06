class HomePage {
  // Webelement locators

  get acceptCookies() {
    return $("#onetrust-accept-btn-handler");
  }

  get btnLogin() {
    return $("//button[contains(text(), 'Login')]");
  }

  get img_Logo() {
    return $("img[alt='Student Beans']");
  }

  get btnSignUp() {
      return $("(//span[contains(text(), 'Sign up')])[1]");
  }

  get searchBox() {
    return $("._tf5swf");
  }

  get inputBox() {
    return $("input._1g5dvk1");
  }

  // get heading() {
  //   return $("//h3[normalize-space()='Discounts']");
  // }

  get samsungResult() {
    return $("(//span[@class='_63p46ei'][normalize-space()='Samsung'])[1]");
  }


  // Actions
  async clickOnCookies() {
    await this.acceptCookies.click();
    console.log("Cookies clicked");
  }

  async clickOnSearchBox() {
    await this.searchBox.isDisplayed();
    await this.searchBox.click();
    console.log("Searchbox clicked");
  }

  async inputText(text) {
    await this.inputBox.setValue(text)
    console.log("Samsung typed");
    await browser.pause(3000);
  }

  async samsungText() {
    const text = await this.samsungResult.getText();
    console.log("samsung text "+ text)
    return text;
  }
}
export default new HomePage();
