import { InventoryPage } from './inventoryPage';

export class ItemDetailsPage {
  public url = 'inventory-item.html?id=';

  get itemName() {
    return cy.get('.inventory_details_name');
  }

  get addToCartButton() {
    return cy.get('[data-test^="add-to-cart-"]');
  }

  get itemDescription() {
    return cy.get('.inventory_details_desc');
  }

  get itemPrice() {
    return cy.get('.inventory_details_price');
  }

  urlIsCorrect() {
    cy.url().should('include', this.url);
  }

  verifyItemsDetails() {
    this.itemName.should('contain.text', InventoryPage.selectedItemName);
    this.itemDescription.should(
      'contain.text',
      InventoryPage.selectedItemDescription,
    );
    this.itemPrice.should('contain.text', InventoryPage.selectedItemPrice);
    this.addToCartButton.should('be.visible');
  }
}
