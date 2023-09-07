import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { categories } from "../assets/data/categories";

export class TodoFilter extends Component {
  render() {
    const { handleSearch, search, handleCategory, category } = this.props;
    return (
      <div>
        <Form.Label className="label">Search Todo</Form.Label>
        <InputGroup className="my-4  mx-auto">
          <Form.Control
            value={search}
            onChange={handleSearch}
            placeholder="Search todo..."
          />
          <InputGroup.Text>
            <Form.Select value={category} onChange={handleCategory}>
              <option value="all">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </InputGroup.Text>
        </InputGroup>
      </div>
    );
  }
}

export default TodoFilter;
