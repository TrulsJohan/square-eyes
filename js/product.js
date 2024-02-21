const productContainer = document.querySelector(".product-container")
const addToBasket = document.querySelector(".basket-button")

const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const idValue = urlParam.get(`id`);

let data = [];
let dataMovie = [];

fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then((response) => response.json())
    .then((result) => {
        data = result;
        dataMovie = data.find(val => val.id === idValue);
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
    saveLocalStorage()
})

function saveLocalStorage (){
    let newData = dataMovie;
    if (localStorage.getItem(`data`) === null){
        localStorage.setItem(`data`, `[]`);
    }
    let oldData = JSON.parse(localStorage.getItem(`data`));
    oldData.push(newData);
    localStorage.setItem(`data`, JSON.stringify(oldData));
}

