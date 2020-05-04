import React from 'react'
import styled from 'styled-components'

import Banner from '../Banner'
import Task from '../Task'

export default ({text, primary}) => {
    return (
        <TaskList>
            <Banner primary={primary}>{text}</Banner>
            <Task primary={primary}/>
            <Task primary={primary}/>
        </TaskList>
    )
}

const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`