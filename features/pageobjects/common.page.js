class commonPage {
  openHomePage() {
    browser.url("https://www.studentbeans.com/uk");
    console.log("Navigating to url 'https://www.studentbeans.com/uk'");
  }
}
export default new commonPage();
