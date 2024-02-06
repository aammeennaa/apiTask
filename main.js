async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    let products = await response.json();
    products = products.products;
    const result = products.map(function (product) {
        return `
        
                <div class="col-md-6 col-12 my-2">
                <div class="card">
                <div class="card-body">
                <img src="${product.thumbnail}" class="card-top-img" alt="Product Image">
                <h4>${product.title}</h4>
                <h5>${product.price} $</h5>
                <button class="btn btn-outline-primary">BUY</button>
                </div>
                </div>
            </div>
        `
    }
    ).join(' ');
    document.querySelector(".products .container .row").innerHTML = result;
}
getProducts();
