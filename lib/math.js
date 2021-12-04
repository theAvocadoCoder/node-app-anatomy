// App object
var app = {};

// get a random number between two integers
app.getRandomNumber = function(min, max) {
  min = typeof(min) == "number" && min % 1 === 0 ? min : 0;
  max = typeof(max) == "number" && max % 1 === 0 ? max : 0;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// export the library
module.exports = app;