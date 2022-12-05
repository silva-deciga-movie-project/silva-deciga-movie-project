console.log("Linked")

setTimeout(() =>)


// This is what what we want posted //
const reviewObj = {
    restaurant_id: 1,
    name: 'Codey',
    rating: 5,
    comments: "This is a really good place for coding and eating"
};

// URL is who were sending it to//
const url = 'https://codeup-restful-example.glitch.me/movies';

// Type of Request //
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    // Body is refering to the body of the reviewObj //
    body: JSON.stringify(reviewObj),
};

// Using fetch data is used in the parameters //
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */

// GET REQUEST //
fetch(url)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */

// GET REQUEST //
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) ); /* handle errors */


// What to do //

//Making post to data bases (POST PUT DELETE REQUEST) //
// OMDB API //

// use a get request from OMBD. then display the info //

// to edit the info, stpre in object, then put in the glitch database //

// if user wanted to add movie, we would have to store the added value into an object and post to database //


/* USer should search for movies and display movies
* allow user to add edit and delete
*
* to add a disabled attribute to the button, which means if theyre adding a movie, we need to disabled search while were adding, so we can add to db first, then when we enabled the search so it can look for it and find it. */

