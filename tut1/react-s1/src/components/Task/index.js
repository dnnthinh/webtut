import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import {FaCheck, FaUndo, FaTrash} from 'react-icons/fa'

export default (props) => {
    return (
        <TaskWrapper>
            <Todo>Lorem 1</Todo>
            <CustomButton>
                {props.primary ? <FaCheck /> : <FaUndo />}
            </CustomButton>
            <CustomButton warning>
                <FaTrash />
            </CustomButton>
        </TaskWrapper>
    )
}

const TaskWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    background: #DFDFDF;
    width: min(90%, 350px);
    height: 50px;
    opacity: 0.7;
`

const Todo = styled.p`
    color: #3E0000;
    margin-right: auto;
    margin-left: 4px;
`

const CustomButton = styled(Button)`
    margin-right: 4px;
    background: transparent;
    color: ${props => props.warning ? 'red' : 'blue'}
`
