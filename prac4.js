db.movies.update({title:"The Hobbit: An Unexpected Journey"},
{$set:{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug"}},{upsert:false});

db.movies.update({title:"The Hobbit: The Desolation of Smaug"},
{$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring"}},{upsert:false});

db.movies.update({title:"Pulp Fiction"},{$push:{actors:"Samuel L. Jackson"}});

db.movies.find({synopsis:"/Bilbo/"})

db.movies.createIndex({synopsis:"text"})
db.movies.find({$text:{$search:"Bilbo"}})
db.movies.find({$text:{$search:"Gandalf"}})

db.movies.find({$text:{$search:"Bilbo -Gandalf"}})

db.movies.find({$text:{$search:"dwarves hobbit"}})

db.movies.find({$text:{$search:"gold dragon"}})

db.movies.remove({title:"Pee Wee Herman's Big Adventure"})

db.movies.remove({title:"Avatar"})