// //Making Request To Glitch //
// fetch('https://highfalutin-defiant-hickory.glitch.me/movies').then((data) => {
//     return data.json();
// }).then((movieData) => {
//     console.log(movieData);
// });


// Posting Request to Glitch //

// Adding Functionality //


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
            console.log(objectData);
        }).catch((error) => {
            console.log(error);
        })
    })

let html =""

html += <div






console.log("linked")

