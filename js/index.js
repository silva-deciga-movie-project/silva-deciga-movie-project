// //Making Request To Glitch //
// fetch('https://highfalutin-defiant-hickory.glitch.me/movies').then((data) => {
//     return data.json();
// }).then((movieData) => {
//     console.log(movieData);
// });
http://www.omdbapi.com/?apikey=[yourkey]&
$("#search-button").click((e) => {
    e.preventDefault();
    let userInput = $("#searchBox").val()
    console.log(userInput)
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d431370d&t=${userInput}
`).then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
    })

})

// Adding Movies to DataBase //
 $("#addButton").on("click", function(e) {
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



//Delete Functionality //

    $(".deleteButton").click(function(e) {
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




console.log("linked")

