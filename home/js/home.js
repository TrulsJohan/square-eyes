const movieContainer = document.querySelector(".movies-container");
const resetButton = document.querySelector(".reset-btn");
const filterDropdown = document.querySelector(".filter-dropdown");


let movies = [];
let genreArray = [];
fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then((response) => response.json())
    .then((result) => movies = result)
    .then(()=> {
        displayMovies(movies)
        console.log(movies)
    });

function displayMovies(){
    for (let i = 0; i < movies.length; i++){
            movieContainer.innerHTML +=`
                <div>
                    <img class="img" src="${movies[i].image}">
                    <h1>${movies[i].title}</h1>
                    <p class="bold">price: ${movies[i].price}
                        <span class="bold, rating">rating: ${movies[i].rating}</span>
                    </p>
                    <p>${movies[i].description}</p>
                </div>`
            if (!genreArray.includes(movies[i].genre)){
                (genreArray.push(movies[i].genre));
            }
    }
    for (let i = 0; i < genreArray.length; i++) {
        filterDropdown.innerHTML += `<option>${genreArray[i]}</option>`
    }
    console.log(genreArray);
}

function displayFilterMovies (filerValue) {
    fetch("https://api.noroff.dev/api/v1/square-eyes")
        .then((response) => response.json())
        .then((result) => {
            movies = result
            movieContainer.innerHTML = ``;
            console.log(filerValue)
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].genre === filerValue) {
                    movieContainer.innerHTML += `
                    <div>
                        <img class="img" src="${movies[i].image}">
                        <h1>${movies[i].title}</h1>
                        <p class="bold">price: ${movies[i].price}
                            <span class="bold, rating">rating: ${movies[i].rating}</span>
                        </p>
                        <p>${movies[i].description}</p>
                    </div>`
                }
            }
        })
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
})











