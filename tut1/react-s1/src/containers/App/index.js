import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import MainPage from '../MainPage'

export default class App extends Component {
    state = {
        todos: [
            {id:1, title: "Dinner with family", isCompleted: true, isInTrash: false},
            {id:2, title: "Do exercies", isCompleted: false, isInTrash: false},
            {id:3, title: "Reading books", isCompleted: false, isInTrash: false}
        ]
    }

    addTodo = (text) => {
        const newTodo = {
            id: this.state.todos.length + 1,
            title: text,
            isCompleted: false,
            isInTrash: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    setCompleted = (todoId, value) => {
        let todo = this.state.todos.find(todo => todo.id === todoId);
        let todoList = this.state.todos.filter(todo => todo.id !== todoId);
        const newTodo = {
            id: todoId,
            title: todo.title,
            isCompleted: value,
            isInTrash: false
        }
        this.setState({todos: [...todoList, newTodo]});
    }

    deleteTodo = (todoId, value) => {
        let todo = this.state.todos.find(todo => todo.id === todoId);
        let todoList = this.state.todos.filter(todo => todo.id !== todoId);
        const newTodo = {
            id: todoId,
            title: todo.title,
            isCompleted: todo.isCompleted,
            isInTrash: value
        }
        this.setState({todos: [...todoList, newTodo]});
    }

    editTodo = (todoId, text) => {
        let todo = this.state.todos.find(todo => todo.id === todoId);
        const indexOfTodo = this.state.todos.indexOf(todo);
        if(indexOfTodo !== -1) {
            const newTodo = {
                id: todoId,
                title: text,
                isCompleted: todo.isCompleted,
                isInTrash: todo.isInTrash
            }
            const todoList = this.state.todos;
            todoList[indexOfTodo] = newTodo;
            this.setState({todos: todoList});
        }
    }

    render() {
        return (
            <AppWrapper>
                <Navbar />
                <MainPage 
                    todos={this.state.todos} 
                    addTodo={this.addTodo} 
                    setCompleted={this.setCompleted} 
                    deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo}
                />
            </AppWrapper>
        )
    }
}

const AppWrapper = styled.div`
    width: min(960px, 100%);
    margin: 0 auto;
`;
