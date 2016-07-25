#### Mongo Install
Install on Mac with homebrew  
https://docs.mongodb.com/master/tutorial/install-mongodb-on-os-x/?_ga=1.224570387.808520246.1469301094  

https://www.mongodb.com/download-center#community  

brew install mongodb
links to /usr/local/bin so that all the mongo code is in the path   

<pre>
ls /usr/local/bin/mo*
/usr/local/bin/mongo		/usr/local/bin/mongoperf
/usr/local/bin/mongod		/usr/local/bin/mongorestore
/usr/local/bin/mongodump	/usr/local/bin/mongos
/usr/local/bin/mongoexport	/usr/local/bin/mongosniff
/usr/local/bin/mongofiles	/usr/local/bin/mongostat
/usr/local/bin/mongoimport	/usr/local/bin/mongotop
/usr/local/bin/mongooplog

</pre

Mongo server demon: mongod  
Mongo CLI: mongo

https://scotch.io/tutorials/an-introduction-to-mongodb

Create a 'db' folder in your project and start mongo with that dbpath
``` mongod --dbpath db  

2016-07-23T13:07:08.817-0700 I NETWORK  [initandlisten] connection accepted from 127.0.0.1:52346 #3 (1 connection now open)

```

In another window run mongo - no database until you insert data -  but start
with use <some name>  
when you insert mongo will create an "\_id" and a free index

```
mongo
> show dbs
local  0.000GB
> db
test
> use my_db
switched to db my_db

> db.users.save({name: 'Becky'});
WriteResult({ "nInserted" : 1 })

> db.users.getIndexes();

> db.users.find();
{ "_id" : ObjectId("5793c922f8bde438165fd8ee"), "name" : "Becky" }


> db.users.find({name:'Becky'});
{ "_id" : ObjectId("5793c922f8bde438165fd8ee"), "name" : "Becky" }


// an update using name selector

> db.users.update({name:'Becky'}, {name:'Becky Peltz'});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({});
{ "_id" : ObjectId("5793c922f8bde438165fd8ee"), "name" : "Becky Peltz" }
>

// but watch out for this
{ "_id" : ObjectId("5793c922f8bde438165fd8ee"), "name" : "Becky Peltz" }
> db.users.update({name:'Becky Peltz'}, {email:'rpeltz@gmail.com'});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({});
{ "_id" : ObjectId("5793c922f8bde438165fd8ee"), "email" : "rpeltz@gmail.com" }
>

// use $set   
> db.users.update({email:'rpeltz@gmail.com'}, {name:'Becky Peltz'});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({});
{ "_id" : ObjectId("5793c922f8bde438165fd8ee"), "name" : "Becky Peltz" }
> db.users.update({name:'Becky Peltz'}, {$set:{email:'rpeltz@gmail.com'}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find({});
{ "_id" : ObjectId("5793c922f8bde438165fd8ee"), "name" : "Becky Peltz", "email" : "rpeltz@gmail.com" }

//see also $inc, $exists, $in

// upserts may want a unique index to prevent duplicating

// find and modify
db.people.findAndModify(
  {
    query: {name:"Becky Peltz"},
    update: {$set: {name: "Rebecca Peltz"}}
  }
  )


//delete
db.users.remove();   //remove the whole collections

db.bios.remove( { } ) // remove all documents in a collections

//delete just one by id
try {
   db.orders.deleteOne( { "_id" : ObjectId("563237a41a4d68582c2509da") } );
} catch (e) {
   print(e);
}


//info
> db.getCollectionNames()
[ "users" ]
> show collections

> exit
bye
Rebeccas-MacBook-Pro:mongoproj becky$ mongo
MongoDB shell version: 3.2.8
connecting to: test
> show dbs
local  0.000GB
my_db  0.000GB


```
