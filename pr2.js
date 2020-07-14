db.Students.update({"_id" : 3.0000000000000000,
    "Grade" : "VII",
    "StudName" : "Aryan David"},{$set:{Hobbies:"Skating"}});
    
    db.Students.update({"_id" : 3.0000000000000000,
    "Grade" : "VII",
    "StudName" : "Aryan David"},{$set:{Hobbies:"Cricket"}},{upsert:true});
    
    
    db.Students.save({_id:4,
        StudName:"vasmi bapat",
        Grade:"VI"});
        
        
    db.Students.save({_id:4,
        StudName:"vasmi bapat",
        Grade:"VI",
        Hobbies:"Cricket"});
        
        db.Students.save({_id:4,
        StudName:"vasmi bapat",
        Grade:"VI",
        Hobbies:"Cricket",
        Location:"Banglore"});
        
        db.Students.update({_id:4},{$set:{Location: "Bangalore"}})
        
        db.Students.update({Grade:"VII"},{$set:{Location:"Mumbai"}})
            
        db.Students.update({Grade:"VII"},{$set:{Location:"Mumbai"}},{multi:true});
        
        db.Students.remove({_id:4});
        
        db.Students.insert({_id:4,StudName:"vasibapat",Grade:"VI"});
        
        db.Students.update({_id:4},{$set:{Location:"Banglore"}});

db.Students.find();
        db.Students.remove({_id:3})