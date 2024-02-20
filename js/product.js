const productContainer = document.querySelector(".product-container")
const addToBasket = document.querySelector(".basket-button")

const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const idValue = urlParam.get(`id`);
console.log(urlParam);
console.log(idValue);

let data = [];
let dataMovie = [];
fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then((response) => response.json())
    .then((result) => {
        data = result;
        console.log(data)
        dataMovie = data.find(val => val.id === idValue);
        console.log(dataMovie);
        displayMovie(dataMovie);
    });

function displayMovie (){
    productContainer.innerHTML +=`
        <div>
           <img class="img" src="${dataMovie.image}" alt="movie-img">
           <h1>${dataMovie.title}</h1>
           <p class="bold">price: ${dataMovie.price}
                <span class="bold, rating">rating: ${dataMovie.rating}</span>
           </p>  
           <p>${dataMovie.description}</p>
        </div>`
}

addToBasket.addEventListener("click", ()=> {
    let movieSerialized = JSON.stringify(dataMovie);
    localStorage.setItem("movieSerialized", movieSerialized);
    window.location = `http://localhost:63342/square-eyes/basket.html`;
    console.log(localStorage);
})



