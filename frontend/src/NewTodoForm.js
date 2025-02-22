import React, { Component } from "react";
//import uuid from "uuid/dist/v4";
import axios from "axios";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const todo = {
      task: this.state.task,
      completed: false
    };
    console.log(todo);

    axios
      .post("http://localhost:5000/todos/add", todo)
      .then(res => console.log(res.data));
    this.setState({ task: "" });
  }
  render() {
    //  console.log("This is newTodo Form ");
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Add your new Todo"
            id="task"
            value={this.state.task}
            onChange={this.handleChange}
          />

          <button className="fa fa-plus"></button>
        </form>
      </div>
    );
  }
}
