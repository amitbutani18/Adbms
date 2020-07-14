db.createCollection("movies")
db.movies.find()
db.movies.insert({title : "Fight Club",writer:"Chuck Palahniuk",year:1999,actors:["Brad Pitt" , "Edward Norton"]})
db.movies.insert({title : "Pulp Fiction",writer:"Quentin Tarantino",year:1994,actors:["John Travolta","Uma Thurman"]})
db.movies.insert({title : "Inglorious Basterds",writer:"Quentin Tarantino",year:2009,actors:["Brad Pitt" , "Diane Kruger" , "Eli Roth"]})
db.movies.insert({title : "The Hobbit: An Unexpected Journey",writer:"J.R.R. Tolkein",year:2012,franchise : "The Hobbit"})
db.movies.insert({title : "The Hobbit: An Unexpected Journey",writer:"J.R.R. Tolkein",year:2013,franchise : "The Hobbit"})
db.movies.insert({title : "The Hobbit: An Unexpected Journey",writer:"J.R.R. Tolkein",year:2012,franchise : "The Hobbit",synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})
db.movies.find()
db.movies.find({writer:"Quentin Tarantino"})
db.movies.find({actors:"Brad Pitt"})
db.movies.find({franchise : "The Hobbit"})
db.movies.find({year:{$gt:1990},year:{$lt:2000}})
db.movies.find({$or:[{year:{$lt:2000}},{year:{$gt:2010}}]})
