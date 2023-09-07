import React, { Component } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { categories } from "../assets/data/categories";

export class TodoForm extends Component {
  render() {
    const { submit, handleTodo, todo } = this.props;
    return (
      <Form onSubmit={submit} className="w-50 mx-auto">
        <Row>
          <Form.Group className="mb-3 label-group" controlId="firstname">
            <Form.Label>Todo Firstname</Form.Label>
            <Form.Control
              value={todo.firstname}
              onChange={handleTodo}
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 label-group" controlId="lastname">
            <Form.Label>Todo Lastname</Form.Label>
            <Form.Control
              value={todo.lastname}
              onChange={handleTodo}
              required
              type="lastname"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 label-group" controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              value={todo.phone}
              onChange={handleTodo}
              required
              type="number"
              placeholder="+998"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 label-group" controlId="category">
            <Form.Label>Todo category</Form.Label>
            <Form.Select value={todo.category} onChange={handleTodo}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className="w-100" type="submit">
          Add person
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
