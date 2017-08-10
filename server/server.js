const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });

  todo.save().then((todo) => {
    console.log('Created a new todo : ', todo);
    res.send(todo);
  }, (e) => {
    console.log('Error saving a todo : ', e);
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
})
