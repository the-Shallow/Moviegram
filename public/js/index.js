import "@babel/polyfill";
import { getMovieOverview } from "./movie";

const searchMovie = document.getElementById("form--movie");

if (searchMovie) {
  searchMovie.addEventListener("submit", (e) => {
    e.preventDefault();
    const movieName = document.getElementById("movie").value;
    console.log(movieName);
    getMovieOverview(movieName);
  });
}
