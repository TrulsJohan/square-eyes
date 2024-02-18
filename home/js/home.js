const productContainer = document.getElementById("#product-container");

let products = [];
fetch("https://v2.api.noroff.dev/square-eyes")
    .then((response) => response.json())
    .then((result) => products = result)
    .then(()=> console.log(products))
    .catch(error => console.log(error));

function displayProducts(product) {
    const productsContainer = document.createElement("div");
    const productsTitle = document.createElement("p");
    productsTitle.innerText = product.title;
    productsContainer.appendChild(productsTitle);
}

for (const product of products){
    displayProducts(product);
}


