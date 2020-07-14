db.Students.find()
db.Students.find({},{StudName:1,Grade:1,_id:0})
db.Students.find({Grade:"VII"})
db.Students.find({Hobbies:{$in:['chess','Skating']}})
db.Students.find({StudName:/^M/})
db.Students.find({StudName:/e/})
db.Students.find({StudName:/a$/})
db.Students.find({$or:[{_id:3},{_id:4}]})
db.Students.find({$and:[{_id:3},{_id:4}]})
db.Students.find({Location:null})
db.Students.distinct("Grade")