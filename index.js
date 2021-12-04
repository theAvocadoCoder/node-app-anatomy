// dependencies
var mathLib = require("./lib/math");
var jokesLib = require("./lib/jokes");

// App object
var app = {};

// configuration
app.config = {
  "timeBetweenJokes": 1000,
}

// function that prints a random joke
app.printAJoke = function() {
  // get all the jokes
  var allJokes = jokesLib.allJokes();

  // get number of jokes
  var numberOfJokes = allJokes.length;

  // generate random number
  var randomNumber = mathLib.getRandomNumber(1, numberOfJokes);

  // pick a jooke based on random number generated
  var selectedJoke = allJokes[randomNumber - 1];

  // send selected joke to the console
  console.log(selectedJoke);
}

// set indefinite loop to keep printing the joke
app.indefiniteLoop = function() {
  // set the interval between each print
  setInterval(app.printAJoke, app.config.timeBetweenJokes);
}

app.indefiniteLoop();

// export the module
module.exports = app;