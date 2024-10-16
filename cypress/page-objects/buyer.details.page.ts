class BuyerDetailsPage {

    /* defined element locators of the product page
    */
    get inputFirstName() {
        return 'input[id="first-name"]'
    }

    get inputLastName() {
        return 'input[id="last-name"]'
    }

    get postCode() {
        return 'input[id="postal-code"]'
    }

    get continueBtn() {
        return 'input[id="continue"]'
    }

    fillBuyerDetailsAndClickContinueBtn(firstName: string, lastName: string, postCode: string) {
        cy.get(this.inputFirstName).type(firstName)
        cy.get(this.inputLastName).type(lastName)
        cy.get(this.postCode).type(postCode)
        cy.get(this.continueBtn).click()
    }
}

export default new BuyerDetailsPage()