import { faker } from '@faker-js/faker';

export class CheckoutPage {
  get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  get postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  get continueButton() {
    return cy.get('#continue');
  }

  enterCheckoutInformation() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.address.zipCode;
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.postalCodeInput.type(postalCode());
  }

  clickContinueButton() {
    this.continueButton.click();
  }
}
