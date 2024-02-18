const movieContainer = document.querySelector(".movies-container");
const searchFilter = document.querySelector("#search");

let movies = [];
fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then((response) => response.json())
    .then(result => {
        movies = result;
        console.log(movies);
        for (let i = 0; i < movies.length; i++){
            movieContainer.innerHTML +=`
            <div>
                <img class="img" src="${movies[i].image}">
                <h1>${movies[i].title}</h1>
                <p class="bold">price: ${movies[i].price}
                    <span class="bold, rating">rating: ${movies[i].rating}</span>
                </p>
                <p>${movies[i].description}</p>
            </div>
            `
        }
    });



// searchFilter.addEventListener("input", debounce((event) => {
//         event.preventDefault();
//
//         const searchWord = searchFilter.query.value;
//         let resultsOfSearch = movies.filter((title) => {
//             return searchWord.split(" ").every((word) => {
//                 return title.title.includes(word);
//             });
//         });
//         renderMovies(resultsOfSearch);
//     }, 500)
// );
//
// function debounce(func, delay) {
//     let timer;
//     return function () {
//         const context = this;
//         const args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func.apply(context, args);
//         }, delay);
//     };
// }
//
// function renderMovies(beers) {
//     console.clear();
//     for (const beer of beers) {
//         console.log(beer);
//     }
// }








