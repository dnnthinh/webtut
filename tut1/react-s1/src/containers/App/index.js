import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import MainPage from "../MainPage";
import TrashPage from "../TrashPage";
import * as store from '../../Storage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
      this.setState({todos: store.getTodos()})
  }

  addTodo = (text) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: text,
      isCompleted: false,
      isInTrash: false,
    };
    const newTodos = [...this.state.todos, newTodo];
    store.setTodos(newTodos);
    console.log(newTodos)
    this.setState({ todos: newTodos });
  };

  setCompleted = (todoId, value) => {
    let todo = this.state.todos.find((todo) => todo.id === todoId);
    let todoList = this.state.todos.filter((todo) => todo.id !== todoId);
    const newTodo = {
      id: todoId,
      title: todo.title,
      isCompleted: value,
      isInTrash: false,
    };
    store.setTodos([...todoList, newTodo]);
    this.setState({ todos: [...todoList, newTodo] });
  };

  deleteTodo = (todoId) => {
    let todo = this.state.todos.find((todo) => todo.id === todoId);
    console.log(todo);
    let todoList = this.state.todos.filter((todo) => todo.id !== todoId);
    const newTodo = {
      id: todoId,
      title: todo.title,
      isCompleted: todo.isCompleted,
      isInTrash: true,
    };
    store.setTodos([...todoList, newTodo]);
    this.setState({ todos: [...todoList, newTodo] });
  };

  deleteForeverTodo = (todoId) => {
    let todo = this.state.todos.find((todo) => todo.id === todoId);
    let todoList;
    if (todo) {
      todoList = this.state.todos.filter((todo) => todo.id !== todoId);
    } else {
      todoList = this.state.todos.filter((todo) => !todo.isInTrash);
    }

    store.setTodos(todoList);
    this.setState({ todos: todoList });
  };

  editTodo = (todoId, text) => {
    let todo = this.state.todos.find((todo) => todo.id === todoId);
    const indexOfTodo = this.state.todos.indexOf(todo);
    if (indexOfTodo !== -1) {
      const newTodo = {
        id: todoId,
        title: text,
        isCompleted: todo.isCompleted,
        isInTrash: todo.isInTrash,
      };
      const todoList = this.state.todos;
      todoList[indexOfTodo] = newTodo;
      store.setTodos(todoList);
      this.setState({ todos: todoList });
    }
  };

  render() {
    return (
      <Router>
        <AppWrapper>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <MainPage
                todos={this.state.todos}
                addTodo={this.addTodo}
                setCompleted={this.setCompleted}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              />
            </Route>
            <Route path="/trash">
              <TrashPage
                todos={this.state.todos}
                setCompleted={this.setCompleted}
                deleteTodo={this.deleteTodo}
                deleteForeverTodo={this.deleteForeverTodo}
              />
            </Route>
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

const AppWrapper = styled.div`
  width: min(960px, 100%);
  margin: 0 auto;
`;
