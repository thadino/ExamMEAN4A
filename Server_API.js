/**
 * Created by Dino on 1/7/2017.
 */



//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/ex3a';

var userss = "";
var dben = "";

exports.connect =  function (cb)
{
// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
    var users = db.collection('users');
    dben = db;
    userss = users;
    if (err) {
      cb('Unable to connect to the mongoDB server. Error:', err);
    } else {
      //HURRAY!! We are connected. :)
      cb('Connection established to', url);



      // RUN HERE

      // update();
      // findAll();
      // deleteLast();
      // insert();

    }
  })
};

exports.insert =  function (cb)
{
  var user1 = {name: 'modulus admin', lat: 55.676098, long: 12.568337,  age: 42, roles: ['admin', 'moderator', 'user']};
  var user2 = {name: 'modulus user', age: 22, lat: 55.699117, long: 12.554248, roles: ['user']};
  var user3 = {name: 'modulus super admin', lat: 55.6166642, long: 12.6166642, age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

  userss.ensureIndex( { "age": 22 }, { expireAfterSeconds: 5 } );

  userss.insertMany([user1, user2, user3], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:',
        result.length, result);
      cb(result);
    }

  });
  dben.close();
};


exports.findAll =  function (cb)
{
  userss.find().toArray(function (err, result) {
    console.log("her er alle menneskerne i byen - ");

    result.forEach(function (user)
      {
        console.log("name: " + user.name + ", age: " +  user.age )
      }

    );
    cb(result);
    dben.close();

  });

};

exports.deleteLast =  function (callback)
{
  userss.find().toArray(function (err, result) {
    console.log(result[result.length-1].age);
    userss.remove( { _id: result[result.length-1]._id }, function (x){
      console.log("her er x" + x);
      callback("sletningen er gennemført");
      dben.close();
    } )
  });
};

exports.update =  function (cb)
{
  userss.find().toArray(function (err, result) {

    userss.updateOne(
      { age : result[0].age },
      {
        $set: { age: 5}
      },
      function(y)
      {

        cb("updateringen er gennemført")

      }
    )

  })
};

