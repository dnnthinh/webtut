import React from 'react'
import styled from 'styled-components'

import NewTask from '../../components/NewTask'
import TaskList from '../../components/TaskList'

export default (props) => {
    let todoList = props.todos.filter(todo => !todo.isInTrash);
    let todos = todoList.filter(todo => !todo.isCompleted);
    let todosCompleted = todoList.filter(todo => todo.isCompleted);

    return (
        <>
        <NewTask addTodo={props.addTodo}/>
        <MainPageWrapper>
            <TaskList text='Todo' 
                primary 
                todos={todos} 
                setCompleted={props.setCompleted} 
                deleteTodo={props.deleteTodo}
                editTodo={props.editTodo}
            />
            <TaskList text='Completed' 
                todos={todosCompleted} 
                setCompleted={props.setCompleted} 
                deleteTodo={props.deleteTodo}
                editTodo={props.editTodo}
            />
        </MainPageWrapper>
        </>
    )
}

const MainPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: 1.5rem auto;
`