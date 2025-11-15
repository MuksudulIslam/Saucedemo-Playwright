const {test, expect} = require("@playwright/test");
const {LoginPage} = require("../pages/LoginPage");
const {InventoryPage} = require("../pages/InventoryPage");
const {CartPage} = require("../pages/CartPage");
const {LogoutPage} = require("../pages/LogoutPage");

test("1. User can login, 2.add a product to the cart, 3.verify the product from the cart, and 4. logout", async ({page}) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const logout = new LogoutPage(page);

    // Go to login page first 
    await login.goto();

    // Login with valid credential
    await login.login("error_user", "secret_sauce");

    // Add a product to the cart
    await inventory.addproductToCart();

    // Go to the cart
    await inventory.openCart();

    // Verify the product name
    const name = await cart.getProductName();
    expect(name).toContain("Sauce Labs Bike Light");

    // Finally Logout from the system
    await logout.logout();

})