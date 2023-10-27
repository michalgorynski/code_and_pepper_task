export class CheckoutSecondPage {
  get finishButton() {
    return cy.get('[data-test="finish"]');
  }

  clickFinishButton() {
    this.finishButton.click();
  }
}
