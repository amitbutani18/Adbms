prac:2

1)
db.students.update({_id:3, StudName:"Aryan David", Grade: "VII"},{$set:{Hobbies: "Skating"}},{upsert:false});

2)
db.students.update({_id:3, StudName:"Aryan David", Grade: "VII"},{$set:{Hobbies: "Skating"}},{upsert:true});

3)
db.students.save({_id:4,StudName:"Vamsi Bapat", Grade: "VI"});

4)
db.Students.save({_id:4,StudName:"Vamsi Bapat", Grade: "VI"});

5)
db.Students.save({_id:4,StudName:"Vamsi Bapat", Grade: "VI", Hobbies:"Cricket"});

6)
db.students.drop()