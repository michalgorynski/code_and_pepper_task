import testData from '../../fixtures/testData.json';

export class CompleteCheckoutPage {
  public url = '/checkout-complete';

  get completeBanner() {
    return cy.get('.checkout_complete_container');
  }

  get backHomeButtton() {
    return cy.get('[data-test="back-to-products"]');
  }

  orderIsSuccessfull() {
    cy.url().should('include', this.url);
    this.completeBanner.should('be.visible');
    this.completeBanner.should('contain.text', testData.successfullOrder1);
    this.completeBanner.should('contain.text', testData.successfullOrder2);
    this.backHomeButtton.should('be.visible');
  }
}
