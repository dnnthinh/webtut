import React from 'react'
import styled from 'styled-components'

import NewTask from '../../components/NewTask'
import TaskList from '../../components/TaskList'

export default () => {
    return (
        <>
        <NewTask />
        <MainPageWrapper>
            <TaskList text='Todo' primary />
            <TaskList text='Completed'/>
        </MainPageWrapper>
        </>
    )
}

const MainPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: 1.5rem auto;
`