import { Then, When, Given } from '@badeball/cypress-cucumber-preprocessor';
import { CheckoutPage } from '../../utils/views/checkoutPage';
import { CheckoutSecondPage } from '../../utils/views/checkoutSecondPage';
import { CompleteCheckoutPage } from '../../utils/views/completeCheckoutPage';
import { CartPage } from '../../utils/views/cartPage';

const checkout = new CheckoutPage();
const secondCheckout = new CheckoutSecondPage();
const cart = new CartPage();
const completeCheckout = new CompleteCheckoutPage();

When('User fills in information form', () => {
  checkout.enterCheckoutInformation();
});

When('User clicks continue button', () => {
  checkout.clickContinueButton();
});

When('User clicks finish button', () => {
  secondCheckout.clickFinishButton();
});

Then('Items amount on checkout page is equal: {int}', () => {
  cart.verifyShoppingCartItemCount(1);
});

When('Order is successfully placed', () => {
  completeCheckout.orderIsSuccessfull();
});
