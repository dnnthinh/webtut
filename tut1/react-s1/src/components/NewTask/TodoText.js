import React from 'react'
import styled from 'styled-components';

export default () => {
    return (
        <TodoText type='text' placeholder="New task">
            
        </TodoText>
    )
}

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