import styled, {css} from 'styled-components';

import React from 'react'

export default () => {
    return (
        <NavItems>
            <Item redColor>Trash</Item>
            <Item>Logout</Item>
        </NavItems>
    )
}


const NavItems = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    line-height: 1.2rem;
    background: transparent;
    margin-left: auto;
`

const Item = styled.li`
    margin-right: 50px;
    color: #FCB500;
    ${props => props.redColor && css`
        color: red;
    `};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`
