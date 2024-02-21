const movieContainer = document.querySelector(".checkout-movies");
let moviesDeserialized = JSON.parse(localStorage.getItem("data"));
console.log(moviesDeserialized);

function displayBasket (){
    for (let i = 0; i < moviesDeserialized.length; i++){
        movieContainer.innerHTML +=`
            <div>
                <img class="img" src="${moviesDeserialized[i].image}" alt="movie-img">
                <h1>${moviesDeserialized[i].title}</h1>
                <p class="bold">price: ${moviesDeserialized[i].price}
                    <span class="bold, rating">rating: ${moviesDeserialized[i].rating}</span>
                </p>  
                <p>${moviesDeserialized[i].description}</p>                
            </div>
        `
    }
}

displayBasket();

