//////////////////COPY index1.js
///////////////////put all the pieces together in a function//////////////

console.log("hello again, world");

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector("#input1");
  const movieList = document.querySelector("#list");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieList.appendChild(movie);
  movie.appendChild(movieTitle);
  //I had .textContent instead of .value
  movieTitle.textContent = inputField.value;
}
const event1 = document.querySelector("#button1");
event1.addEventListener("click", addMovie);
