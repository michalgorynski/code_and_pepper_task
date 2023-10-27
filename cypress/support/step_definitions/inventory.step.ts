import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { InventoryPage } from '../../utils/views/inventoryPage';

const inventory = new InventoryPage();

Then('User is redirected to the inventory page', () => {
  inventory.urlIsCorrect();
});

When('User adds random item to cart', () => {
  inventory.addRandomItemToCart();
});

When('User removes all items from cart', () => {
  inventory.removeAllItemsFromCart();
});

Then(
  'Shopping cart badge displays the number: {int}',
  (itemsAmount: number) => {
    inventory.verifyShoppingCartItemCount(itemsAmount);
  },
);

Then('Shopping cart badge is not visible', () => {
  inventory.verifyShoppingCartItemCount(0);
});

When('User opens shopping cart', () => {
  inventory.openShoppingCart();
});

When(
  'User sorts items by {string} {string}',
  (sortBy: 'name' | 'price', order: 'ascending' | 'descending') => {
    inventory.sortItems(sortBy, order);
  },
);

Then(
  'Items are sorted by name {string}',
  (order: 'ascending' | 'descending') => {
    inventory.verifyNameSorted(order);
  },
);

Then(
  'Items are sorted by price {string}',
  (order: 'ascending' | 'descending') => {
    inventory.verifyPriceSorted(order);
  },
);

When('User opens any item details', () => {
  inventory.openAnyItem();
});
