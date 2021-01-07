import React, { Component } from "react";
//import axios from "axios";
import "./Todo.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);

    this.setState({ isEditing: !this.state.isEditing });
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    //console.log("This is Todo");
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="todo">
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button className="fa fa-save"></button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todo">
          <li
            className={this.props.completed ? "completed" : "notcompleted"}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <button className="fa fa-edit" onClick={this.toggleForm}></button>
          <button
            className="fa fa-trash-o"
            onClick={this.handleRemove}
          ></button>
        </div>
      );
    }
    return result;
  }
}
