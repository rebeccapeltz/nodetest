#### mongoose
Object modeling package  
Create schemas  

```
npm install mongoose --save
```
Schema types:  
* String
* *
Date
* Buffer
* Boolean
* Mixed
* ObjectId
* Array

##### get mongoose.Schema code  
* convention: schema is lowercase, model is uppercase, instance is lowercase  
* create a new schema  `var userSchema = new Schema({` using name and type  
* use the mongoose.model to create a model from schema   `var User = mongoose.model('User', userSchema);`    
* make it available to the rest of the app `module.exports = User;`  

##### for create  
instance.save()  
can return a promise
``` JavaScript
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

product.save().then(function(product) {
   ...
});
```
##### for get  

Model.find(cb(err, list));
``` JavaScript
Kitten.find(function (err, kittens) {  //save return error, instance, number affected
  if (err) return console.error(err);
  console.log(kittens);
})
```

##### for put  
Model.findByIdAndUpdate(id, [update], [options], [callback])
A.findByIdAndUpdate(id, update, callback) // executes

##### for delete
Model.findOneAndRemove(conditions, [options], [callback])

##### dropping database after Testing
mongoose.connection.db.dropDatabase(() => {
  done();
});
