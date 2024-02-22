const productContainer = document.querySelector(".products-container")
const addToBasket = document.querySelector(".basket-button");
const loading = document.querySelector(".loading");

const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const idValue = urlParam.get(`id`);

let dataMovie = [];

async function fetchMovieId (){
    loading.style.display = `block`;
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        const result = await response.json();
        dataMovie = result.find(val => val.id === idValue);
        displayMovie(dataMovie);
    }
    catch (error){
        alert("Could not fetch data!");
    }
}

fetchMovieId();

function displayMovie (){
    loading.style.display = `none`;
    productContainer.innerHTML +=`
        <div class="product-container">
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
    const exists = oldData.some(item => item.id === newData.id);
    if (!exists){
        oldData.push(newData);
        localStorage.setItem(`data`, JSON.stringify(oldData));
    }
}

