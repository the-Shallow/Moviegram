const { query } = require("express");
const fetch = require("node-fetch");

exports.getOverview = async (req, res, next) => {
  
  if (!req.query.movie) req.query.movie = "movies";

  const result = await fetch(
    `http://www.omdbapi.com/?s=${req.query.movie}&apikey=27d5f8f7`
  );

  const movies = await result.json();

  const data = movies.Search;
  res.status(200).render("overview", {
    title: "Overview",
    data,
  });
  next();
};

exports.getMovieInfo = async (req, res, next) => {
  const result = await fetch(
    `http://www.omdbapi.com/?t=${req.params.title}&apikey=27d5f8f7`
  );

  const movies = await result.json();
  // console.log(movies);
  res.status(200).render("movie", {
    title: movies.Title,
    movies,
  });
  next();
};
