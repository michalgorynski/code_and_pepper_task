export class LoginPage {
  open() {
    cy.visit('/');
  }

  get usernameInput() {
    return cy.get('[data-test="username"]');
  }
  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  enterCredentials(username: string, password: string) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
  }

  clickLoginButton() {
    this.loginButton.click();
  }
}
