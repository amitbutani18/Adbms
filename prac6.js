db.Customers.aggregate( { $match : {AccType : "S" } },
{ $group : { _id : "$CustID",TotAccBal : { $sum : "$AccBal" } } });

db.Customers.aggregate( { $match : {AccType : "S" } },
{ $group : { _id : "$CustID",TotAccBal : { $sum : "$AccBal" } } },
{ $match : {TotAccBal : { $gt : 1200 } }});

db.Customers.find();

db.Customers.insert([
{ CustID: "C123",
  AccBal: 500, 
  AccType: "S"},
  { CustID: "C123",
    AccBal: 900, 
    AccType: "S"},
    { CustID: "C111",
      AccBal: 1200, 
      AccType: "S"},
      { CustID: "C123",
        AccBal: 1500,
        AccType: "C"}]);
        
db.Customers.mapReduce(
        function(){ emit(this.CustID, this.AccBal);},
        function(key, values){ return Array.sum( values )},
        {
            query : {AccType: "S"},
            out: "amunt_total"
        }
        )
        
        db.amunt_total.find();
        
        db.Students.count();

        db.Students.find();
        
        db.post.find()
        
        db.post.find({ Description: { $regex: 'tables' } });
        
        db.post.find({ Tages: { $regex: 'database',$options: "$i" } });
        
        
db.post.find({ Tages: { $regex: 'database' } });

db.Students.find().sort({StudName:-1,Location:-1})

db.Students.find();

db.Students.find().skip(2)

db.Students.find().skip(2).limit(2)

db.Students.find().skip(db.Students.count()-2)





