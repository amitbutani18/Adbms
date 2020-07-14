db.food.insert({_id:1, fruits:['banana', 'apple', 'cherry']});
db.food.insert({_id:2, fruits:['orange', 'butterfruit', 'mango']});
db.food.insert({_id:3, fruits:['peneapple', 'strawberry', 'grapes']});

db.food.find()

db.food.find({fruits:['banana','apple','cherry']});

db.food.find({fruits: 'banana'});

db.food.find({'fruits.0': 'banana'});

db.food.find({fruits: {$size: 2}});

db.food.find({},{fruits: {$slice: 2}});

db.food.find({},{fruits: {$slice: [1,2]}});

db.food.update({_id:3},{$set: {'fruits.0': 'apple'}});

db.food.update({_id:1},{$push: {price:{banane: 50, apple:150, cherry:100}}});

db.food.update({_id:3},{$addToSet:{fruits:'Orange'}});