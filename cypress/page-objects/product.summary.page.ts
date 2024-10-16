class ProductSummaryPage {

    /* defined element locators of the product page
   */
    get productTitle() {
        return 'div[class="inventory_item_name"]'
    }

    get productDescription() {
        return 'div[class="inventory_item_desc"]'
    }

    get productPrice() {
        return 'div[class="inventory_item_price"]'
    }

    get finishBtn() {
        return 'button[id="finish"]'
    }

    get orderCompletionSuccessMsgHeader() {
        return 'h2[class="complete-header"]' 
    }

    verifyProductAttributeValues(productTitle: string, productDescription: string, productPrice: string) {
        cy.get(this.productTitle).should('have.text', productTitle)
        cy.get(this.productDescription).should('have.text', productDescription)
        cy.get(this.productPrice).should('have.text', productPrice)
    }
}

export default new ProductSummaryPage()