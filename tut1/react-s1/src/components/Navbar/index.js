import React from "react";
import styled, {css} from "styled-components";

export default () => {
    return (
        <NavbarWrapper>
            <Brand href="/">Todoist</Brand>
            <NavItems>
                <Item redColor>Trash</Item>
                <Item>Logout</Item>
            </NavItems>
        </NavbarWrapper>
    );
};

const NavbarWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

const Brand = styled.a`
    text-decoration: none;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #FCB500;
    background: transparent;
    margin-left: 50px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

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
