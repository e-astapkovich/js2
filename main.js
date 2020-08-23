const products = [
    { title: 'product-1', price: 50 },
    { title: 'product-2', price: 55 },
    { title: 'product-3', price: 40 },
    { title: 'product-4', price: 35 },
    { title: 'product-5', price: 500 },
    { title: 'product-6', price: 99 },
    { title: 'product-7', price: 123 },
    { title: 'product-8', price: 4 },
    { title1: 'product-9', price1: 12 },
];

class ProductItem {
    constructor(title = 'product', price = 0) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `
            <div class="fetured_item">
                <a href="Single_page.html"><img src="https://via.placeholder.com/263x280" alt="product image" class="fetured_img"></a>
                <div class="fetured_text"> <a href="#" class="fetured_description">${this.title}</a>
                    <p class="fetured_price"><span class="pink_text">$${this.price}</span></p>
                </div><a href="#" class="product_add_2">Add to Cart</a>
            </div>
        `;
    }
}

class ProductList {
    constructor() {
        this.list = [];
    }
    _fetchProductList() {
        this.list = products;
    }
    render() {
        let html = '';
        this._fetchProductList();
        this.list.forEach(({ title, price }) => {
            html += new ProductItem(title, price).render();
        });
        document.querySelector('.product_container').innerHTML = html;
    }
}

class CartItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.quantity = 0;
    }
    render() {
        return
        `
            <a href="product.html">
                <div class="drop-cart__good">
                    <img class="drop-cart__img" src="https://via.placeholder.com/72x85" alt="photo">
                    <div class="drop-cart__text">
                        <h2 class="drop-cart__h2">${this.title}</h2>
                        <img src="img/rating_stars.png" alt="rating">
                        <p class="drop-cart__price pink_text">${this.quantity}  x   $${price}</p>
                    </div>
                        <img class="drop-cart__delete" src="img/delete.png" alt="delete">
                </div>
            </a>
        `;
    }
}

class Cart {
    constructor() {
        this.cartList = [];
        this.visible = false;
    }
    show() {

    }
    add(product) {

    }
    delete(product) {

    }
    countTotal() {

    }
    render() {

    }

}

let productList = new ProductList();
productList.render();