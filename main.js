async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    let products = await response.json();
    products = products.products;
    const result = products.map(function (product) {
        return `
        
                <div class="col-md-2 col-12 my-2">
                <div class="card">
                <div class="card-body">
                <div class="embed-responsive embed-responsive-16by9">
                  <img src="${product.thumbnail}" class="embed-responsive-item card-top-img" alt="Product Image">
                </div>                
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
