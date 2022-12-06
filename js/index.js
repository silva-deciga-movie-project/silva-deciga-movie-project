// Fetch to glitch, the data coming back is SUPPOSED to populate cards. But guess what bro, it doesn't. HELP. //

let html =""
fetch('https://highfalutin-defiant-hickory.glitch.me/movies').then((data) => {
    return data.json();
}).then((data) => {
    for(let movie of data) {

        $(".movie-list-container").append(
            `<div class="movie-list-wrapper">
    <div class="movie-list">
        <div class="movie-list-item">
            <img class="movie-list-item-img" src="${data.Poster}" alt=""/>
            <span class="movie-list-item-title">${data.Title}</span>
            <p class="movie-list-item-desc">${data.Plot}</p>
            <button class="movie-list-itmem-button"></button>
            </div>
        </div>
    </div>
</div>`
        )}
    console.log(data);

});

// Search button is clicked, then data is extracted from the searchbox, sends the data through fetch to the API. Once the API receieves the data it returns in an object and THEN "CreateCard" function is called to populate the cards. //
   $("#search-button").click((e) => {
        e.preventDefault();
        let userInput = $("#searchBox").val()
        console.log(userInput)
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d431370d&t=${userInput}
`).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            createCard(data, 'newMovies');
        })

    })

// Adding Movies to Glitch DataBase //
$("#addButton").on("click", function (e) {
    e.preventDefault();
    const submitObj = {
        title: $("#addTitle").val(),
        director: $("#addDirector").val(),
        rating: $("#addRating").val(),
        genre: $("#addGenre").val(),
    };
    const url = 'https://highfalutin-defiant-hickory.glitch.me/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitObj),
    };
    fetch(url, options).then(() => fetch('https://highfalutin-defiant-hickory.glitch.me/movies')).then((data) => {
        return data.json();
    }).then((objectData) => {
        console.log(objectData).then();
    }).catch((error) => {
        console.log(error);
    })
})


//Delete movies from glitch database Functionality //

$(".deleteButton").click(function (e) {
    console.log($("#movieDelete").val());
    e.preventDefault();
    const url = '//highfalutin-defiant-hickory.glitch.me/movies/' + $("#movieDelete").val();

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(url, options).then(() => fetch('https://highfalutin-defiant-hickory.glitch.me/movies')).then((data) => {
        return data.json();
    }).then((objectData) => {
        console.log(objectData);
    }).catch((error) => {
        console.log(error);
    });
});


// Function created to populate cards on webpage. //
function createCard(data, containerName) {
$('.' + containerName).append(

        `<div class="movie-list-wrapper">
    <div class="movie-list">
        <div class="movie-list-item">
            <img class="movie-list-item-img" src="${data.Poster}" alt=""/>
            <span class="movie-list-item-title">${data.Title}</span>
            <p class="movie-list-item-desc">${data.Plot}</p>
            <button class="movie-list-itmem-button"></button>
        </div>
    </div>
</div>
</div>`
)}



console.log("linked")


// Get fetch request from glitch to populate. //
// Use code from coffee project to filter out movies //
