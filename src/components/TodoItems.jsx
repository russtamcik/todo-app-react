import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export class TodoItem extends Component {
  render() {
    const { id, firstname, category, lastname, done, no, doneTodo, phone } =
      this.props;
    return (
      <Alert
        variant="primary"
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          {no}. {firstname} {lastname}
          <br />
          <br />
          Category: {category}
          <br />
          <br />
          Phone number: {phone}
        </div>
        {done ? (
          <span>
            ❤️<button className="btn btn-danger mx-2">Delete</button>
          </span>
        ) : (
          <div>
            <button className="btn btn-light" onClick={() => doneTodo(id)}>
              💔
            </button>
            <button className="btn btn-danger mx-3">Delete</button>
          </div>
        )}
      </Alert>
    );
  }
}

export default TodoItem;
