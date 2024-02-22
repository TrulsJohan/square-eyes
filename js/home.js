const movieContainer = document.querySelector(".movies-container");
const resetButton = document.querySelector(".reset-btn");
const filterDropdown = document.querySelector(".filter-dropdown");
const loading = document.querySelector(".loading");

let movies = [];
let genreArray = [];

async function fetchData (){
    loading.style.display = `block`;
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        movies = await response.json();
        displayMovies(movies);
    }
    catch (error){
        alert("Could not fetch data!");
    }
}

fetchData();

function displayMovies(){
    loading.style.display = `none`;
    for (let i = 0; i < movies.length; i++){
            movieContainer.innerHTML +=`
                <div class="product-container">
                    <img class="img" src="${movies[i].image}" alt="movie-img">
                    <h1>${movies[i].title}</h1>
                    <p class="bold">price: ${movies[i].price}
                        <span class="bold, rating">rating: ${movies[i].rating}</span>
                    </p>                   
                    <a href="product.html?id=${movies[i].id}">
                        View more info
                    </a>
                </div>`
            if (!genreArray.includes(movies[i].genre)){
                (genreArray.push(movies[i].genre));
            }
    }
    for (let i = 0; i < genreArray.length; i++) {
        filterDropdown.innerHTML += `<option>${genreArray[i]}</option>`
    }
}

async function displayFilterMovies (filterValue){
    loading.style.display = `block`;
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        const movies = await response.json();
        loading.style.display = `none`;
        movieContainer.innerHTML = ``;
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].genre === filterValue) {
                movieContainer.innerHTML += `
                    <div class="product-container">
                        <img class="img" src="${movies[i].image}">
                        <h1>${movies[i].title}</h1>
                        <p class="bold">price: ${movies[i].price}
                            <span class="bold, rating">rating: ${movies[i].rating}</span>
                        </p> 
                        <a href="product.html?id=${movies[i].id}">
                            View more info
                        </a>  
                    </div>`
            }}
    }
    catch (error){
        alert("Could not fetch data!");
    }
}

filterDropdown.addEventListener("change", ()=> {
    if (filterDropdown.value === "All movies"){
        displayMovies(movies);
    } else {
        displayFilterMovies(filterDropdown.value)
    }});

resetButton.addEventListener("click", ()=> {
    movieContainer.innerHTML = ``;
    filterDropdown.innerHTML = `<option value="default" disabled selected>Select your</option>`;
    displayMovies(movies);
});
