import React, { Component } from "react";
import TodoList from "./TodoList.js";
import "./App.css";
export default class App extends Component {
  render() {
    console.log("This is App");
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}
