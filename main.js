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

    xhr.open('GET', url, true);
    xhr.send();

    xhr.onload = function() {
      res(xhr.responseText);
    };

    xhr.onerror = function() {
      res(new Error('Ошибка загрузки каталога'));
    }
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
    this.filteredList = [];
    this._fetchProductList();
  }

  _fetchProductList() {
    makeGetRequest(`${API_URL}/catalogData.json`)
      .then(response => JSON.parse(response))
      .then((dataJSON) => {
        this.list = dataJSON;
        this.filteredList = this.list;
      })
      .catch(err => console.log(err))
      .finally(() => this.render());
  }

  render() {
    let html = '';
    this.filteredList.forEach(({ product_name, price, img }) => {
      html += new ProductItem(product_name, price, img).render();
    });
    document.querySelector('.product_container').innerHTML = html;

  }

  filterProducts(input_value) {
    const regexp = new RegExp(input_value, 'i');
    this.filteredList = this.list.filter(product => regexp.test(product.product_name));
    this.render();
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

document.querySelector('.cart').addEventListener('click', () => {
  document.querySelector('.drop_move').classList.toggle('invisible');
});

const list = new ProductList();

document.querySelector('.searh_button').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('button click');
  let value = document.querySelector('.search').value;

  list.filterProducts(value);
});