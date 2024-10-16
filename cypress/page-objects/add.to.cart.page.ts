class AddToCartPage{
   
    /* defined element locators of the product page
    */
    get addToCartBtn(){
        return 'button[id="add-to-cart-sauce-labs-backpack"]'
    }

    get cartIcon(){
        return 'a[class="shopping_cart_link"]'
    }

    get checkoutBtn(){
        return 'button[id="checkout"]'
    }

    /* A method to add items to a cart
    */

    addAnItemToCartAndCheckout(){
        cy.get(this.addToCartBtn, { timeout: 10000 }).should('be.visible');
        cy.get(this.addToCartBtn).click()
        cy.get(this.cartIcon, { timeout: 10000 }).should('be.visible');
        cy.get(this.cartIcon).click()
        cy.get(this.checkoutBtn).click()
    }   

}

export default new AddToCartPage()