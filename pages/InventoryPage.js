class InventoryPage {

    constructor(page) {

        this.page = page;
        this.addToCartButton = "#add-to-cart-sauce-labs-bike-light";
        this.cartIcon = ".shopping_cart_link";
    }

    async addproductToCart () {
        await this.page.click(this.addToCartButton);
    }

    async openCart () {

        await this.page.click(this.cartIcon);
    }
}

module.exports = {InventoryPage};