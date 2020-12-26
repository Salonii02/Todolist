import React, { Component } from "react";
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";
import "./TodoList.css";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  update(id, updatedTask) {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      } else return todo;
    });
    this.setState({ todos: updateTodos });
  }
  toggleCompletion(id) {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
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
          key={todo.id}
          id={todo.id}
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
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
