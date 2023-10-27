export class CartPage {
  get cartItem() {
    return cy.get('.cart_item');
  }

  get cartItemQuantity() {
    return cy.get('.cart_quantity');
  }

  get continueShoppingButton() {
    return cy.get('[data-test="continue-shopping"]');
  }

  get checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  backToInventoryPage() {
    this.continueShoppingButton.click();
  }

  goToCheckout() {
    this.checkoutButton.click();
  }

  verifyShoppingCartItemCount(itemsAmount: number) {
    if (itemsAmount === 0) {
      this.cartItem.should('not.exist');
    } else {
      let total = 0;
      this.cartItemQuantity
        .each(($item) => {
          const value = parseInt($item.text(), 10);
          total += value;
        })
        .then(() => {
          cy.wrap(total).should('eq', itemsAmount);
        });
    }
  }
}
