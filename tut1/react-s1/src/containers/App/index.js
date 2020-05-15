import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import MainPage from "../MainPage";
import AuthPage from "../AuthPage";
import HomePage from "../HomePage";
import TrashPage from "../TrashPage";
import * as store from '../../Storage'
import {PrivateRoute} from '../../FakeAuth'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
    state = {
        todos: [],
        user: {},
        isLoggedIn: false
    };

    // componentDidMount() {
    //     this.setState({ todos: store.getTodos(this.state.user.email) });
    // }

    login = (user) => {
        this.setState({ todos: store.getTodos(user.email), user: user, isLoggedIn: true });
    }

    logout = () => {
        this.setState({todos: [], user: {}, isLoggedIn: false});
    }

    addTodo = (text) => {
        if(this.state.todos.find(todo => todo.title === text)) {
            return;
        }
            
        const newTodo = {
            id: this.state.todos.length + 1,
            title: text,
            isCompleted: false,
            isInTrash: false,
        };
        const newTodos = [...this.state.todos, newTodo];
        store.setTodos(this.state.user.email, newTodos);
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
        store.setTodos(this.state.user.email, [...todoList, newTodo]);
        this.setState({ todos: [...todoList, newTodo] });
    };

    deleteTodo = (todoId) => {
        let todo = this.state.todos.find((todo) => todo.id === todoId);
        let todoList = this.state.todos.filter((todo) => todo.id !== todoId);
        const newTodo = {
            id: todoId,
            title: todo.title,
            isCompleted: todo.isCompleted,
            isInTrash: true,
        };
        store.setTodos(this.state.user.email, [...todoList, newTodo]);
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

        store.setTodos(this.state.user.email, todoList);
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
            store.setTodos(this.state.user.email, todoList);
            this.setState({ todos: todoList });
        }
    };

    render() {
        return (
            <Router>
                <AppWrapper>
                    <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
                    <Switch>
                        <Route exact path="/">
                            <HomePage isLoggedIn={this.state.isLoggedIn}/>
                        </Route>
                        <Route path="/login">
                            <AuthPage login={this.login}/>
                        </Route>
                        <PrivateRoute isLoggedIn={this.state.isLoggedIn} path="/dashboard">
                            <MainPage
                                todos={this.state.todos}
                                addTodo={this.addTodo}
                                setCompleted={this.setCompleted}
                                deleteTodo={this.deleteTodo}
                                editTodo={this.editTodo}
                            />
                        </PrivateRoute>
                        <PrivateRoute isLoggedIn={this.state.isLoggedIn} path="/trash">
                            <TrashPage
                                todos={this.state.todos}
                                setCompleted={this.setCompleted}
                                deleteTodo={this.deleteTodo}
                                deleteForeverTodo={this.deleteForeverTodo}
                            />
                        </PrivateRoute>
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
