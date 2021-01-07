import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Todo List App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Todos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/create" className="nav-link">
                CreateTodo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/user" className="nav-link">
                CreateUser
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
