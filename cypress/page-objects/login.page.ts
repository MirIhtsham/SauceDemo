class LoginPage {

    /* defined element locators of the page
   */
    get inputUserName() {
        return cy.get('[id="user-name"]');
    }

    get inputUserPassword() {
        return cy.get('[data-test="password"]');
    }

    get loginBtn() {
        return cy.get('[id="login-button"]');
    }

    get inventoryItems() {
        return cy.get('div[class="inventory_item_name "]')
    }

    // method to perform login action
    login(userName: string, password: string) {
        this.inputUserName.type(userName)
        this.inputUserPassword.type(password)
        this.loginBtn.click()
    }

    // method to verify login page loaded successfully
    verifyLoginPageLoaded(minNumberOfProducts: number, loginPagePath: string) {
        cy.url().should('include', loginPagePath)
        this.inventoryItems.its('length').should('be.gte', minNumberOfProducts)
    }

}

export default new LoginPage();