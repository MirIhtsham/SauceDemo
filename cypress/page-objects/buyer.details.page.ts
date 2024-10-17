class BuyerDetailsPage {

    /* defined element locators of the page
    */
    get inputFirstName() {
        return cy.get('input[id="first-name"]')
    }

    get inputLastName() {
        return cy.get('input[id="last-name"]')
    }

    get inputPostCode() {
        return cy.get('input[id="postal-code"]')
    }

    get continueBtn() {
        return cy.get('input[id="continue"]')
    }

    /* A method to populate buyer details
    */
    fillBuyerDetailsAndClickContinueBtn(firstName: string, lastName: string, postCode: string) {
        this.inputFirstName.type(firstName)
        this.inputLastName.type(lastName)
        this.inputPostCode.type(postCode)
        this.continueBtn.click()
    }
}

export default new BuyerDetailsPage()