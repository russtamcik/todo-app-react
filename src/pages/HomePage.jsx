import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import TodoInputs from "../components/TodoInputs";
import TodoItems from "../components/TodoItems";
import TodoFilter from "../components/TodoFilter";

export class HomePage extends Component {
  state = {
    todos: [
      {
        id: 0,
        firstname: "Rustam",
        lastname: "Abbasov",
        phone: "+998901347432",
        category: "Family",
        done: false,
      },
      {
        id: 1,
        firstname: "Siyavush",
        lastname: "Abbasov",
        phone: "+998931404111",
        category: "Friends",
        done: true,
      },
      {
        id: 2,
        firstname: "Firdavs",
        lastname: "Xamitov",
        phone: "+998931400370",
        category: "Relatives",
        done: false,
      },
    ],
    todo: {
      firstname: "",
      lastname: "",
      phone: "",
      category: "Familya",
    },
    search: "",
    category: "all",
  };
  render() {
    let { todos, search, category, todo } = this.state;
    todos = todos.filter((todo) =>
      todo.firstname.toLowerCase().includes(search)
    );

    if (category !== "all") {
      todos = todos.filter((todo) => todo.category === category);
    }

    const doneTodos = todos.filter((todo) => todo.done);
    const undoneTodos = todos.filter((todo) => !todo.done);

    const handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    };

    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      let newTodos = [...todos, { ...todo, done: false }];
      this.setState({
        todos: newTodos,
        todo: { firstname: "", lastname: "", category: "Family", phone: "" },
      });
    };

    const handleTodo = (e) => {
      let newTodo = { ...todo, [e.target.id]: e.target.value };
      this.setState({ todo: newTodo });
    };

    const doneTodo = (id) => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      this.setState({ todos: newTodos });
    };

    return (
      <Container>
        <TodoInputs todo={todo} submit={submit} handleTodo={handleTodo} />
        <TodoFilter
          handleCategory={handleCategory}
          category={category}
          search={search}
          handleSearch={handleSearch}
        />
        <Tabs
          defaultActiveKey="profile"
          variant="pills"
          className="my-3"
          justify
        >
          <Tab eventKey="all" title="All todos">
            {todos.map((todo, i) => (
              <TodoItems doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="💔" title="Dislike 💔">
            {undoneTodos.map((todo, i) => (
              <TodoItems doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="❤️" title="Like ❤️">
            {doneTodos.map((todo, i) => (
              <TodoItems doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default HomePage;
