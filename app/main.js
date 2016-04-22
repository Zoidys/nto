var Backbone = require('backbone');
var Movies = require('collections/movies');
module.exports = function() { return Backbone };

var data = require('../../movies.json');
var movies = new Movies(data);
module.exports = movies;