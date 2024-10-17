class ProductSummaryPage {

    /* defined element locators of the page
   */
    get productTitle() {
        return cy.get('div[class="inventory_item_name"]')
    }

    get productDescription() {
        return cy.get('div[class="inventory_item_desc"]')
    }

    get productPrice() {
        return cy.get('div[class="inventory_item_price"]')
    }

    get finishBtn() {
        return cy.get('button[id="finish"]')
    }

    get orderCompletionSuccessMsgHeader() {
        return cy.get('h2[class="complete-header"]')
    }

    verifyProductAttributeValues(productTitle: string, productDescription: string, productPrice: string) {
        this.productTitle.should('have.text', productTitle)
        this.productDescription.should('have.text', productDescription)
        this.productPrice.should('have.text', productPrice)
    }
}

export default new ProductSummaryPage()