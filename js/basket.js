const movieContainer = document.querySelector(".basket-movies");
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
                <button class="remove-button" data-index="${i}">Remove from basket</button>
            </div>
        `
    }
}

displayBasket();

movieContainer.addEventListener("click", (event)=> {
    if (event.target.classList.contains("remove-button")) {
        const indexToRemove = event.target.dataset.index;
        moviesDeserialized.splice(indexToRemove, 1);
        localStorage.setItem("data", JSON.stringify(moviesDeserialized));
        movieContainer.innerHTML = "";
        displayBasket();
    }
})

