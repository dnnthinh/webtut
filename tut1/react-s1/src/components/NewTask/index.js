import React from 'react'
import styled from 'styled-components'

import TodoText from './TodoText'
import AddButton from './AddButton'
import {FaPlus} from 'react-icons/fa'

export default () => {
    return (
        <TodoTextWrapper>
            <TodoText />
            <AddButton>
                <FaPlus />
            </AddButton>
        </TodoTextWrapper>
    )
}

const TodoTextWrapper = styled.div`
    display: flex;
    align-items: center;
    width: min(90%, 550px);
    margin: 0 auto;
`
