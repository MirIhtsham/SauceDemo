class LoginPage {

    /* defined element locators of the product page
   */
    get inputUserName() {
        return '[id="user-name"]';
    }

    get inputUserPassword() {
        return '[data-test="password"]';
    }

    get loginBtn() {
        return '[id="login-button"]';
    }

    get inventoryItems() {
        return 'div[class="inventory_item_name "]'
    }

    login(userName: string, password: string) {
            cy.get(this.inputUserName).type(userName)
            cy.get(this.inputUserPassword).type(password)
            cy.get(this.loginBtn).click()  
    }

    verifyLoginPageLoaded(minNumberOfProducts: number, loginPath: string) {
        cy.url().should('include', loginPath)
        cy.get(this.inventoryItems).its('length').should('be.gte', minNumberOfProducts)
    }

}

export default new LoginPage();