db.posts.insert([{username :"GoodGuyGreg",
title : "Passes out at party",
body : "Wakes up early and cleans house"},
{username :"GoodGuyGreg",	
title : "Steals your identity",
body : "Raises your credit score"},
{username :"GoodGuyGreg",
title : "Reports a bug in your code",
body : "Sends you a Pull Request"},
{username :"ScumbagSteve",
title : "Borrows something",
body : "Sells it"},
{username :"ScumbagSteve",
title : "Borrows everything",
body : "The end"},
{username :"ScumbagSteve",
title : "Forks your repo on github",
body : "Sets to private"}])

db.posts.find()

db.comments.insert([{username :"GoodGuyGreg",
comment : "Hope you got a good deal!",
post : ObjectId("5d352f3efebd4d9b85391d0c")},
{username :"GoodGuyGreg",
comment : "What's mine is yours!",
post : ObjectId("5d352f3efebd4d9b85391d0d")},
{username :"GoodGuyGreg",
comment : "Don't violate the licensing agreement!",
post : ObjectId("5d352f3efebd4d9b85391d0e")},
{username :"ScumbagSteve",
comment : "It still isn't clean",
post : ObjectId("5d352f3efebd4d9b85391d09")},
{username :"ScumbagSteve",
comment : "Denied your PR cause I found a hack",
post : ObjectId("5d352f3efebd4d9b85391d0b")}])


db.comments.find();
db.posts.find();
db.posts.find({username:"GoodGuyGreg"})
db.posts.find({username:"ScumbagSteve"})

db.comments.find({username:"GoodGuyGreg"})
db.comments.find({username:"ScumbagSteve"})

var a=db.posts.findOne({title:"Reports a bug in your code"})
db.comments.find({post:a._id})

