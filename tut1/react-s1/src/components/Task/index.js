import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import {FaCheck, FaUndo, FaTrash} from 'react-icons/fa'

export default (props) => {
    let handleButton = () => {
        props.primary ?
            props.setCompleted(props.todo.id, true)
            :
            props.setCompleted(props.todo.id, false);
    }
    let handleDelete = () => {
        props.deleteTodo(props.todo.id, true);
    }
    return (
        <TaskWrapper>
            <Todo value={props.todo.title} readOnly></Todo>
            <CustomButton onClick={handleButton}>
                {props.primary ? <FaCheck /> : <FaUndo />}
            </CustomButton>
            <CustomButton warning onClick={handleDelete}>
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

const Todo = styled.input`
    color: #3E0000;
    margin-right: auto;
    margin-left: 4px;
    line-height: 2rem;
    border: none;
    background:transparent;
    &:focus {
        outline: none;
    }
`

const CustomButton = styled(Button)`
    margin-right: 4px;
    background: transparent;
    color: ${props => props.warning ? 'red' : 'blue'}
`
