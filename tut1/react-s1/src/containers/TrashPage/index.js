import React from 'react'
import styled from 'styled-components'

import TaskList from '../../components/TaskList'

export default (props) => {
    let todoList = props.todos.filter(todo => todo.isInTrash);

    return (
        <>
        <TrashPageWrapper>
            <TaskList text='Trash' 
                trash
                todos={todoList} 
                setCompleted={props.setCompleted} 
                deleteTodo={props.deleteTodo}
                deleteForeverTodo={props.deleteForeverTodo}
                editTodo={props.editTodo}
            />
        </TrashPageWrapper>
        </>
    )
}

const TrashPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: 1.5rem auto;
`