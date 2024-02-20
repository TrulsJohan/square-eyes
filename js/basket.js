const movieContainer = document.querySelector(".basket-movies");
let moviesDeserialized = JSON.parse(localStorage.getItem("movieSerialized"));
console.log(localStorage);
console.log(moviesDeserialized);

let basketArray = [];
function addMovieToArray (){
    basketArray.push(moviesDeserialized);
    console.log(basketArray);
    displayBasket(basketArray);
}

addMovieToArray();

function displayBasket (){
    for (let i = 0; i < basketArray.length; i++){
        movieContainer.innerHTML +=`
            <div>
                <img class="img" src="${basketArray[i].image}" alt="movie-img">
                <h1>${basketArray[i].title}</h1>
                <p class="bold">price: ${basketArray[i].price}
                    <span class="bold, rating">rating: ${basketArray[i].rating}</span>
                </p>  
                <p>${basketArray[i].description}</p>            
            </div>
        `
    }
}