console.log("hello world");

// const addMovie = (event) => {}

const inputField = document.querySelector(".movie-input");
console.log(inputField.textContent);

//select the description in the DOM
const description = document.querySelector(".description");
//create a new paragraph
const newDescription = document.createElement("p");
newDescription.textContent =
  "This site should allow a user to add a movie to a movie list by entering a string and pressing the button";
//add (append) the new paragraph to the description class
description.appendChild(newDescription);

//parent element for movie list
const movieList = document.querySelector(".movie-list");
//parent element for the movie title and delete button
const movie = document.createElement("li");
//a new span element for a movie title in the "movie-list" class
const movieTitle = document.createElement("span");

//append a movie lsit item to the movie-list class
movieList.appendChild(movie);
//
movie.appendChild(movieTitle);
// TEST THE CODE ABOVE WITH HARD CODED MOVIE TITLE
// movieTitle.textContent = "testing ...the button is not on"
movieTitle.textContent = inputField;

//query select the desired button by ID and save it as a variable to use in the event listener
const eventButton1 = document.querySelector("#button1")
eventButton1.addEventListener("click",() =>{
 alert('the button was clicked')
})

// SAME thing as above comment, but w/o variable
document.querySelector("#button1").addEventListener("click",() =>{
    alert('the button was clicked')
   })