db.createCollection("students");
db.students.insert({_ID:1, Studentname:"Michelle Jacintha", Grade: "VII", Hobbies:"Internet Surfing"});
db.students.insert({_ID:2, Studentname:"Mabel Mathews", Grade: "VII", Hobbies:"Baseball"});
db.students.find();

---------------------------------------------------------------------------------------
db.createCollection("mycol");
db.mycol.insert({_ID:"ObjectId(7df78ad8902c)", Title:"MongoDB Overview", Description:"MongoDB is no sql database", By:"CGPIT", url:"www.cgpit-bardoli.edu", Tages:"mongodb,database,NoSQL", Likes:"100"});
db.mycol.find();

---------------------------------------------------------------------------------------

db.createCollection("post");
db.post.insert({_ID:"ObjectId(7df78ad8902c)", Title:"MongoDB Overview", Description:"MongoDB is no sql database", By:"CGPIT", url:"www.cgpit-bardoli.edu", Tages:"mongodb,database,NoSQL", Likes:"100", comment:""});
db.post.insert({ Title:"NoSQLDatabas",
    Description:"NoSQL database does not have tables",
    By:"UTU",
    url:"www.utu.ac.in",
    Tages:["mongodb","database","NoSQL"],
    Likes:"20", 
        comment:[
            {
                user: 'user1',
                message: 'New Pic',
                DateCreated: new Date(2017,07,01,2.26),
                Like:0
                
            }
            ]
})

db.post.find();

---------------------------------------------------------------------------------------
db.createCollection("Company");
db.Company.insert({_ID:1,
    Name:{first:"John",last:"Backus"},
    Birth:ISODate("1924-12-03T05:00:00Z"),
    Death:ISODate("2007-03-17T04:00:00Z"),
    Contribs:"Fortran,ALGOL,Backus-Naur Form,FP",
    award:[
        {
            award:"W.W. McDowell Award",
            year:1967,
            by:"IEEE Computer Society"
        },
        {
            award:"National Medal of Science",
            year:1975,
            by:"National Science Foundation"
        },
        
        {
            award:"Turing Award",
            year:1977,
            by:"ACM"
        },
        
        {
            award:"Draper Prize",
            year:1993,
            by:"National Academy of Engineering"

        },
    ]
})

db.Company.insert({_ID:"51df07b094c6acd67e492f41",
    Name:{first:"John",last:"McCarthy"},
    Birth:ISODate("1927-09-04T04:00:00Z"),
    Death:ISODate("2011-12-24T05:00:00Z"),
    Contribs:"Lisp,Artificial Intelligence,ALGOL",
    award:[
        {
            award:"Turing Award",
            year:1971,
            by:"ACM"
        },
        {
            award:"Kyoto Prize",
            year:1988,
            by:"Inamori Foundation"
        },
        
        {
            award:"National Medal of Science",
            year:1990,
            by:"National Science Foundation"

        },
    ]
})

db.Company.insert({_ID:3,
    Name:{first:"Grace",last:"Hopper"},
    title:"Rear Admiral",
    Birth:ISODate("1906-12-09T05:00:00Z"),
    Death:ISODate("1992-01-01T05:00:00Z"),
    Contribs:"UNIVAC,compiler,FLOW-MATIC,COBOL",
    award:[
        {
            award:"Computer Sciences Man of the Year",
            year:1969,
            by:"Data Processing Management Association"
        },
        {
            award:"Distinguished Fellow",
            year:1973,
            by:"British Computer Society"

        },
        
        {
            award:"W. W. McDowell Award",
            year:1976,
            by:"IEEE Computer Society"
        },
        {
            award:"National Medal of Technology",
            year:1991,
            by:"United States"
        },
    ]
})

db.Company.insert({_ID:4,
    Name:{first:"Kristen",last:"Nygaard"},
    Birth:ISODate("1926-08-27T04:00:00Z"),
    Death:ISODate("2002-08-10T04:00:00Z"),
    Contribs:"OOP,Simula",
    award:[
        {
            award:"Rosing Prize",
            year:1999,
            by:"Norwegian Data Association"
        },
        {
            award:"Turing Award",
            year:2001,
            by:"ACM"
        },
        
        {
            award:"IEEE John von Neumann Medal",
            year:2001,
            by:"IEEE"

        },
    ]
})

db.Company.insert({_ID:5,
    Name:{first:"Ole-Johan",last:"Dahl"},
    Birth:ISODate("1931-10-12T04:00:00Z"),
    Death:ISODate("2002-06-29T04:00:00Z"),
    Contribs:"OOP,Simula",
    award:[
        {
            award:"Rosing Prize",
            year:1999,
            by:"Norwegian Data Association"
        },
        {
            award:"Turing Award",
            year:2001,
            by:"ACM"
        },
        
        {
            award:"IEEE John von Neumann Medal",
            year:2001,
            by:"IEEE"

        },
    ]
})

db.Company.insert({_ID:6,
    Name:{first:"James",last:"Gosling"},
    Birth:ISODate("1955-05-19T04:00:00Z"),
    Contribs:"java",
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
    ]
})

db.Company.insert({_ID:7,
    Name:{first:"Yukihiro",last:"Matz,last:Matsumoto"},
    Birth:ISODate("1965-04-14T04:00:00Z"),
    Contribs:"Ruby",
    award:[
        {
            award:"Award for the Advancement of Free Software",
            year:2011,
            by:"Free Software Foundation"

        },
    ]
})

db.Company.insert({_ID:8,
    Name:{first:"Martin",last:"Odersky"},
    Contribs:"Scala",})

db.Company.find();
    
----------------------------------------------------------------------------------------------
    
pr1)
    
    

