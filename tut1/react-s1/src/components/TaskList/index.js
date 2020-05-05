import React from 'react'
import styled from 'styled-components'

import Banner from '../Banner'
import Task from '../Task'

export default ({text, primary, todos, setCompleted, deleteTodo}) => {
    return (
        <TaskList>
            <Banner primary={primary}>{text}</Banner>
            {
                todos.map(todo => 
                    <Task key={todo.id} 
                        todo={todo} 
                        primary={primary}
                        setCompleted={setCompleted} 
                        deleteTodo={deleteTodo}    
                    />
                )
            }
        </TaskList>
    )
}

const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`