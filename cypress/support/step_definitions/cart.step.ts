import { Then, When, Given } from '@badeball/cypress-cucumber-preprocessor';
import { CartPage } from '../../utils/views/cartPage';

const cart = new CartPage();

Then('Shopping cart items amount is equal: {int}', (cartAmount: number) => {
  cart.verifyShoppingCartItemCount(cartAmount);
});

Then('Shopping cart is empty', () => {
  cart.verifyShoppingCartItemCount(0);
});

When('User goes to inventory page', () => {
  cart.backToInventoryPage();
});

When('User goes to checkout page', () => {
  cart.goToCheckout();
});
