import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import {FaPlus} from 'react-icons/fa'

export default ({addTodo}) => {
    let textRef = React.createRef();
    let handleAddTodo = ()=>{
        if(textRef.current && textRef.current.value !== '') {
            addTodo(textRef.current.value);
            textRef.current.value = '';
        }
    }
    return (
        <TodoTextWrapper>
            <TodoText 
                ref={textRef} 
                type='text' 
                placeholder="New task"
                onKeyPress={(event) => {
                    if(event.key === 'Enter') 
                        handleAddTodo()
                }}
                onBlur={handleAddTodo}
                >
                
            </TodoText>
            <AddButton onClick={handleAddTodo}>
                <FaPlus />
            </AddButton>
        </TodoTextWrapper>
    )
}

const TodoTextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: min(90%, 550px);
    margin: 0 auto;
`

const TodoText = styled.input`
    display: inline-block;
    height: 40px;
    width: min(90%, 500px);
    background: #C4C4C4;
    font-size: 1.5rem;
    padding: 0 3px;
    color: gray;
    border: none;
`

const AddButton = styled(Button)`
  background: #FCB500;
  width: 40px;
  height: 40px;
  color: blue;
  &:hover {
    background: transparent;
    color: #FCB500;
  }
`
