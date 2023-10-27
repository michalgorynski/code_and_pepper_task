export class InventoryPage {
  public url = '/inventory';
  public static selectedItemName: string;
  public static selectedItemDescription: string;
  public static selectedItemPrice: string;

  get shoppingCartButton() {
    return cy.get('#shopping_cart_container');
  }

  get shoppingCartAmountIndicator() {
    return cy.get('.shopping_cart_badge');
  }

  get addToCartButtons() {
    return cy.get('[data-test^="add-to-cart-"]');
  }

  get removeFromCartButtons() {
    return cy.get('[data-test^="remove-"]');
  }

  get selectSortOption() {
    return cy.get('[data-test="product_sort_container"]');
  }

  get item() {
    return cy.get('.inventory_item');
  }

  get itemName() {
    return cy.get('.inventory_item_name ');
  }

  get itemPrice() {
    return cy.get('.inventory_item_price');
  }

  urlIsCorrect() {
    cy.url().should('include', this.url);
  }

  addRandomItemToCart() {
    this.addToCartButtons.then((buttons) => {
      const randomIndex = Math.floor(Math.random() * buttons.length);
      cy.wrap(buttons[randomIndex]).click();
    });
  }

  removeAllItemsFromCart() {
    this.removeFromCartButtons.each(($button) => {
      cy.wrap($button).click();
    });
  }

  verifyShoppingCartItemCount(itemsAmount: number) {
    if (itemsAmount === 0) {
      this.shoppingCartAmountIndicator.should('not.exist');
    } else {
      this.shoppingCartAmountIndicator.should(
        'have.text',
        itemsAmount.toString(),
      );
    }
  }

  openShoppingCart() {
    this.shoppingCartButton.click();
  }

  sortItems(sortBy: 'name' | 'price', order: 'ascending' | 'descending') {
    let value;
    if (sortBy === 'name') {
      value = order === 'ascending' ? 'az' : 'za';
    } else if (sortBy === 'price') {
      value = order === 'ascending' ? 'lohi' : 'hilo';
    }
    this.selectSortOption.select(value);
  }

  verifyNameSorted(order: 'ascending' | 'descending') {
    this.itemName.then(($items) => {
      const itemNames = $items
        .map((_, el) => Cypress.$(el).text().trim())
        .get();
      const sortedItemNames = [...itemNames].sort();
      if (order === 'descending') {
        sortedItemNames.reverse();
      }
      cy.wrap(itemNames).should('deep.equal', sortedItemNames);
    });
  }

  verifyPriceSorted(order: 'ascending' | 'descending') {
    this.itemPrice.then(($prices) => {
      const itemPrices = $prices.map((_, el) =>
        parseFloat(Cypress.$(el).text().replace('$', '')),
      );

      for (let i = 0; i < itemPrices.length - 1; i++) {
        if (order === 'ascending') {
          cy.wrap(itemPrices[i]).should('be.lte', itemPrices[i + 1]);
        } else if (order === 'descending') {
          cy.wrap(itemPrices[i]).should('be.gte', itemPrices[i + 1]);
        }
      }
    });
  }

  openAnyItem() {
    this.item.then((items) => {
      const randomIndex = Math.floor(Math.random() * items.length);
      InventoryPage.selectedItemName = Cypress.$(items[randomIndex])
        .find('.inventory_item_name ')
        .text();
      InventoryPage.selectedItemPrice = Cypress.$(items[randomIndex])
        .find('.inventory_item_price')
        .text();
      InventoryPage.selectedItemDescription = Cypress.$(items[randomIndex])
        .find('.inventory_item_desc')
        .text();
      cy.log(InventoryPage.selectedItemName);
      cy.log(InventoryPage.selectedItemPrice);
      cy.wrap(Cypress.$(items[randomIndex]).find('.inventory_item_name ')).click();
    });
  }
}
