db.getCollection('company').find({})
db.company.insert({ID:6,
    Name:{first:"James",last:"Gosling"},
    Title:"",
    Birth:ISODate("1955-05-19T04:00:00Z"),
    Death:ISODate(),
    Contribs:["java"],
    award:[
    {
    award:"The Economist Innovation Award",
    year:2002,
    by:"The Economist"
    },
    {
    award:"Officer of the Order of Canada",
    year:2007,
    by:"Canada"
    },
    ]});
    db.company.find();
    db.company.remove({_ID:3})