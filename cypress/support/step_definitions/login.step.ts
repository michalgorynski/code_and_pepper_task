import { Then, When, Given } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../utils/views/loginPage';

const login = new LoginPage();

Then('User opens login page', () => {
  login.open();
});

When(
  'User enters username: {string} and password: {string}',
  (username: string, password: string) => {
    login.enterCredentials(username, password);
  },
);

Then('User clicks login button', () => {
  login.clickLoginButton();
});
