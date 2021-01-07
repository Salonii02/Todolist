import React, { Component } from "react";
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";
import "./TodoList.css";
import axios from "axios";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    //  this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  /* create() {
    /* axios
      .post("http://localhost:5000/todos/add", newTodo)
      .then(res => console.log(res.data));
      this.setState({
      todos: [...this.state.todos, newTodo]
    });*/
  /*  axios
      .get("http://localhost:5000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    console.log("This is create method");
  }*/
  componentDidMount() {
    console.log("This is componentDidMount");
    axios
      .get("http://localhost:5000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  /*componentDidUpdate() {
    console.log("This is componentDidupdte");
    axios
      .get("http://localhost:5000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }*/
  show() {
    axios
      .get("http://localhost:5000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  remove(id) {
    /* this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });*/
    axios.delete("http://localhost:5000/todos/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      todos: this.state.todos.filter(el => el._id !== id)
    });
  }
  update(id, updatedTask) {
    var updateTodo = {};
    const todoscopy = this.state.todos;
    for (let i = 0; i < todoscopy.length; i++) {
      if (todoscopy[i]._id === id)
        updateTodo = { ...todoscopy[i], task: updatedTask };
    }
    axios
      .post("http://localhost:5000/todos/update/" + id, updateTodo)
      .then(response => {
        console.log(response.data);
      });
    const updateTodos = this.state.todos.map(todo => {
      if (todo._id === id) {
        return { ...todo, task: updatedTask };
      } else return todo;
    });
    this.setState({ todos: updateTodos });
  }

  toggleCompletion(id) {
    var updateTodo = {};
    const todoscopy = this.state.todos;
    for (let i = 0; i < todoscopy.length; i++) {
      if (todoscopy[i]._id === id)
        updateTodo = { ...todoscopy[i], completed: !todoscopy[i].completed };
    }
    axios
      .post("http://localhost:5000/todos/update/" + id, updateTodo)
      .then(response => {
        console.log(response.data);
      });
    const updateTodos = this.state.todos.map(todo => {
      if (todo._id === id) {
        return { ...todo, completed: !todo.completed };
      } else return todo;
    });
    this.setState({ todos: updateTodos });
  }
  render() {
    console.log("This is TodoList ");
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo._id}
          id={todo._id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="todolist">
        <h1>
          Todo list!
          <span>A simple react todo app</span>
        </h1>
        <NewTodoForm />
        <ul>{todos}</ul>
      </div>
    );
  }
}
