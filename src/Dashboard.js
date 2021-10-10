import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Clock from "./Components/Clock";
import styled from "styled-components";
import { v4 } from "uuid";

const TODOS_KEY = 'todo_list'

export default class Dashboard extends Component {
  state = {
    todos: [],
    todoTitle: "",
  };

  handleChangeTodoTitle(event) {
    const value = event.target.value;
    this.setState({ todoTitle: value });
  }

  handleNewTodo() {
    this.setState((oldState) => {
      if (oldState.todoTitle === "") {
        return;
      }

      let newTodo = {
        id: v4(),
        title: oldState.todoTitle,
      };

      return {
        todos: [...oldState.todos, newTodo],
        todoTitle: "",
      };
    });
  }

  delTodo = (todo) => {
    const newTodos = this.state.todos.filter(
      (element) => element.id !== todo.id
    );
    this.setState({ todos: newTodos });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem(TODOS_KEY, JSON.stringify(this.state.todos));
    }
  }

  componentDidMount() {
    let todoString = localStorage.getItem(TODOS_KEY);
    if (todoString) {
        this.setState({
            todos: JSON.parse(todoString)
        })
    }
  }

  render() {
    return (
      <DashboardContainer>
        <Navbar />
        <Clock />
        <br />
        <form>
          <input
            type="text"
            name="todoTitle"
            value={this.state.todoTitle}
            placeholder="what do you want to do"
            onChange={(event) => this.handleChangeTodoTitle(event)}
          ></input>
          <button type="button" onClick={() => this.handleNewTodo()}>
            Do It!
          </button>
        </form>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              <p>
                {todo.title}
                <button onClick={() => this.delTodo(todo)}>X</button>
              </p>
            </li>
          ))}
        </ul>
      </DashboardContainer>
    );
  }
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;
