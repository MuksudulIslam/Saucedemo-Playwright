class CartPage {

    constructor(page) {

        this.page = page;
        this.productName = ".inventory_item_name";
    }

    async getProductName () {

        return this.page.textContent(this.productName);
    }
}

module.exports = {CartPage};