const productContainer = document.getElementById("#product-container");

let products = [];
fetch("https://v2.api.noroff.dev/square-eyes")
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        products = result;
    })
    .then(()=> console.log(products));



