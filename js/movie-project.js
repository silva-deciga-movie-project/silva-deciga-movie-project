//Making request to Glitch
// function postMovie() {
//     return fetch('https://highfalutin-defiant-hickory.glitch.me/movies').then((data) => {
//         return data.json();
//     }).then((movieData) => {
//         console.log(movieData);
//     });
// }

$(document).ready(function() {
    setTimeout(function () {
        fetch('https://highfalutin-defiant-hickory.glitch.me/movies').then((data) => {
            data.json().then((movieInfo) => {
                movieInfo.forEach((movie) => {
                    $('.movieCards').append(
                        `<div class=" d-flex col-2" id="movie">
                    <div class="card" style="width: 30rem;" >
                        <img src="${movie.Poster}" class="card-img-top" alt="poster">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <p class="card-text">${movie.Plot}</p>
                                <p class="card-text"> Genre: ${movie.Genre}</p>
                            </div>
                    </div>
                </div>`)
                })
            })
        })
    }, 2000)
})

    function getOmdbMovies(search) {
        return fetch(`http://www.omdbapi.com/?s=${search}&apikey=${movies_API}`).then((data) => {
            return data.json();
        }).then((movieData) => {
            console.log(movieData);
            let movieInfo = movieData;

            const url = 'https://highfalutin-defiant-hickory.glitch.me/movies';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieInfo),
            };
            fetch(url, options)
                .then(response => console.log(response))
                .catch(error => console.error(error));
        })
    }

getOmdbMovies('avengers')

