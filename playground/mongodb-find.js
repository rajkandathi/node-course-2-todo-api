//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // de-structuring. its same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  // db.collection('Todos').find({
  //   _id:new ObjectID("598ae215ae4e59fcc4907d1e")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos');
  //   console.log('Todos count :', count);
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  db.collection('Users').find({name:'Rk'}).toArray().then((users) => {
    console.log('Users');
    console.log(JSON.stringify(users, undefined, 2));
  });

  db.collection('Users').find({name:'Rk'}).count().then((count) => {
    console.log('Users');
    console.log('User count :', count);
  })

  //db.close();
});
