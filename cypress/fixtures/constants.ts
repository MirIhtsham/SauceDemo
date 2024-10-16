export const Credentials = {
    userName: 'standard_user',
    userPassword: Cypress.env('USER_PASSWORD')
}

export const ProductPageSpecifications = {
    minNumberOfProducts: 1,
    loginPagePath: '/inventory'
}

export enum BuyerDetails{
    firstName= 'Ihtsham',
    lastName='Mir',
    postCode='14567'
}

export enum ProductSpecificationValues{
    productTitle = 'Sauce Labs Backpack',
    productDescription = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    productPrice = '$29.99'
}

export const orderCompletionSuccessMsg= 'Thank you for your order!'