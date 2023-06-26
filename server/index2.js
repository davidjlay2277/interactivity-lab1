//////////////////COPY index1.js /////////////////////////////////////////
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

  const deleteBtn = document.createElement("button");
  movie.appendChild(deleteBtn)
  deleteBtn.textContent = "x";
//previoulsy outside the addMovie function
deleteBtn.addEventListener("click",deleteMovie);
  //previously had .textContent instead of .value
  movieTitle.textContent = inputField.value;
 inputField.value = "";
}
// /what would be the functional difference of pointing the query at the form instead of the button? what if the form had multiple buttons? 
const event1 = document.querySelector("#button1");
event1.addEventListener("click", addMovie);

function deleteMovie(event) {
  alert("movie entry was deleted")
event.target.parentNode.remove()
}

document.querySelector(deleteBtn).addEventListener("click",deleteMovie);

