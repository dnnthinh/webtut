import React from 'react'
import styled from 'styled-components'

import NewTask from '../../components/NewTask'
import TaskList from '../../components/TaskList'

export default (props) => {
    let todos = props.todos.filter(todo => !todo.isCompleted);
    let todosCompleted = props.todos.filter(todo => todo.isCompleted);

    return (
        <>
        <NewTask />
        <MainPageWrapper>
            <TaskList text='Todo' primary todos={todos} />
            <TaskList text='Completed' todos={todosCompleted} />
        </MainPageWrapper>
        </>
    )
}

const MainPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: 1.5rem auto;
`