const products = [
    {title: 'product-1', price: 50},
    {title: 'product-2', price: 55},
    {title: 'product-3', price: 40},
    {title: 'product-4', price: 35},
    {title: 'product-5', price: 500},
    {title: 'product-6', price: 99},
    {title: 'product-7', price: 123},
    {title: 'product-8', price: 4},
    {title: 'product-9', price: 12},
];

const renderProductItem = (title, price) => {
    return `<div class="fetured_item">
                <a href="Single_page.html"><img src="img/man_product-1.jpg" alt="product image" class="fetured_img"></a>
                <div class="fetured_text"> <a href="#" class="fetured_description">${title}</a>
                    <p class="fetured_price"><span class="pink_text">$${price}</span></p>
                </div><a href="#" class="product_add_2">Add to Cart</a>
                <a href="#" class="product_refresh"></a>
                <a href="#" class="product_like"></a>
            </div>`;
};

const renderProductList = (list) => {
    let productList = list.map(item => renderProductItem(item.title, item.price));
    // console.log(productList);
    document.querySelector('.product_container').innerHTML = productList;
};

renderProductList(products);