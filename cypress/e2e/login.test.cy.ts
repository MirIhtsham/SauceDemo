/// <reference types="cypress" />

import loginPage from "../page-objects/login.page"
import { Credentials, ProductPageSpecifications, BuyerDetails, ProductSpecificationValues, orderCompletionSuccessMsg } from "../fixtures/constants"
import addToCartPage from "../page-objects/add.to.cart.page"
import buyerDetailsPage from "../page-objects/buyer.details.page"
import productSummaryPage from "../page-objects/product.summary.page"

describe('Sauce demo: login and add to cart validation', () => {
    beforeEach(() => {
        cy.session('Login session', () => {
            cy.visit('/')
            loginPage.login(Credentials.userName, Credentials.userPassword)
        })
    })

    it('Login with Valid Credentials', () => {
        cy.visit('/inventory.html', { failOnStatusCode: false })
        loginPage.verifyLoginPageLoaded(ProductPageSpecifications.minNumberOfProducts, ProductPageSpecifications.loginPagePath)
    })

    it('Add Products to the Cart and Complete a Purchase', () => {
        cy.visit('/inventory.html', { failOnStatusCode: false })
        addToCartPage.addAnItemToCartAndCheckout()
        buyerDetailsPage.fillBuyerDetailsAndClickContinueBtn(BuyerDetails.firstName, BuyerDetails.lastName, BuyerDetails.postCode)
        productSummaryPage.verifyProductAttributeValues(ProductSpecificationValues.productTitle, ProductSpecificationValues.productDescription, ProductSpecificationValues.productPrice)
        productSummaryPage.finishBtn.click()
        productSummaryPage.orderCompletionSuccessMsgHeader.should('have.text', orderCompletionSuccessMsg)
    })

})