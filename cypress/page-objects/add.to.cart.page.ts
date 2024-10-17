class AddToCartPage {

    /* defined element locators of the page
    */
    get addToCartBtn() {
        return cy.get('button[id="add-to-cart-sauce-labs-backpack"]')
    }

    get cartIcon() {
        return cy.get('a[class="shopping_cart_link"]')
    }

    get checkOutBtn() {
        return cy.get('button[id="checkout"]')
    }

    // A method to add items to a cart
    addAnItemToCartAndCheckout() {
        this.addToCartBtn.click()
        this.cartIcon.click()
        this.checkOutBtn.click()
    }

}

export default new AddToCartPage()