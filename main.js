'use strict'

const API_URL = "https://raw.githubusercontent.com/e-astapkovich/online-store-api/master";

function makeGetRequest(url) {
    return new Promise(function (res, rej) {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest;
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    res(xhr.responseText);
                } else {
                    rej("Ошибка загрузки каталога")
                }
            } 
        }

        xhr.open('GET', url, true);
        xhr.send();
    });
}

class ProductItem {
    constructor(product_name = 'product', price = 0, img) {
        this.product_name = product_name;
        this.price = price;
        this.img = img;
    }

    render() {
        return `
            <div class="fetured_item">
                <a href="Single_page.html"><img src=${this.img} alt="product image" class="fetured_img"></a>
                <div class="fetured_text"> <a href="#" class="fetured_description">${this.product_name}</a>
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
        return new Promise((res, rej) => {
            makeGetRequest(`${API_URL}/catalogData.json`)
                .then(response => JSON.parse(response))
                .then((dataJSON) => this.list = dataJSON)
                .catch(err => console.log(err))
                .finally(res);
        });


    }

    render() {
        let html = '';
        this._fetchProductList()
            .then(() => {
                this.list.forEach(({ product_name, price, img }) => {
                    html += new ProductItem(product_name, price, img).render();
                });
                document.querySelector('.product_container').innerHTML = html;
            })

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

new ProductList().render();