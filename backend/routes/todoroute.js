const express = require("express");
const router = express.Router();
let Todo = require("../models/Todo");

router.route("/").get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  //const username = req.body.username;
  const task = req.body.task;
  const completed = req.body.completed;
  //const duration = req.body.duration;
  //const start = req.body.start;
  const newTodo = new Todo({ task, completed });
  newTodo
    .save()
    .then(() => res.json("Todo Added"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(todo => res.json("Todo Deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      // todo.username = req.body.username;
      todo.task = req.body.task;
      todo.completed = req.body.completed;
      //todo.duration = req.body.duration;
      //todo.start = req.body.start;

      todo
        .save()
        .then(() => res.json("Todo Updated"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
