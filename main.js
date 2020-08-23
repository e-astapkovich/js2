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
    constructor(title, price){
        this.title = title;
        this.price = price;
    }

    render(){
        return `
            <div class="fetured_item">
                <a href="Single_page.html"><img src="img/man_product-1.jpg" alt="product image" class="fetured_img"></a>
                <div class="fetured_text"> <a href="#" class="fetured_description">${this.title}</a>
                    <p class="fetured_price"><span class="pink_text">$${this.price}</span></p>
                </div><a href="#" class="product_add_2">Add to Cart</a>
                <a href="#" class="product_refresh"></a>
                <a href="#" class="product_like"></a>
            </div>
        `;
    }
}

class ProductList {
    constructor(){
        
    }
    _fetchProductList(){
        return products;
    }
    render(){
        let html = '';
        let list = this._fetchProductList();
        list.forEach(({ title, price }) => {
            html += new ProductItem(title, price).render();
        });
        document.querySelector('.product_container').innerHTML = html;
    }
}

let productList = new ProductList();
productList.render();