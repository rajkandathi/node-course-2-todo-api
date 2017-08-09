//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // de-structuring. its same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
  //   console.log(doc);
  // });

  // db.collection('Users').deleteMany({name: 'Rk'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({_id:new ObjectID('5989a27cfce7ca16cc46694c')}).then((result) => {
  //   console.log(result);
  // });

  


  //db.close();
});
