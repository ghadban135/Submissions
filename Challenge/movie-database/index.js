// import express (after npm install express)
const express = require("express");

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get("/", (req, res) => {
  res.send("ok");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  var d = new Date();
  var TIME1 = d.getHours();
  var TIME2 = d.getMinutes();
  res.send({ status: 200, message: `${TIME1}:${TIME2}` });
});

app.get("/hello/:idd?", (req, res) => {
  var id = req.params.idd;
  res.send({ status: 200, message: "Hello", id });
});

app.get("/search?:s?", (req, res) => {
  var search = req.query.s;
  if (search) {
    res.send({ status: 200, message: "ok", data: search });
  } else
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
});
app.get("/movies/create", (req, res) => {
  res.send("create movies");
});
app.get("/movies/read", (req, res) => {
  res.send({ status: 200, data: movies });
});
app.get("/movies/update", (req, res) => {
  res.send("update movies");
});
app.get("/movies/delete", (req, res) => {
  res.send("delete movies");
});
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

const sortedMov = movies.slice().sort((a, b) => a.year - b.year);
app.get("/movies/read/by-date", (req, res) => {
  res.send({ status: 200, data: sortedMov });
});

const sortedRat = movies.slice().sort((a, b) => b.rating - a.rating);
app.get("/movies/read/by-rating", (req, res) => {
  res.send({ status: 200, data: sortedRat });
});

const sortedTit = movies.slice().sort(function(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});
app.get("/movies/read/by-title", (req, res) => {
  res.send({ status: 200, data: sortedTit });
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
