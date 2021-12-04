// dependencies
var fs = require("fs");

// App object
var jokes = {};

// get all jokes and return them to the user
jokes.allJokes = function() {
  // read the text file containing the jokes
  var fileContents = fs.readFileSync(__dirname+"/jokes.txt", "utf8");

  // put the jokes in an array
  var arrayOfJokes = fileContents.split(/\r?\n/);

  // return the array
  return arrayOfJokes;
}

// export the library
module.exports = jokes;