import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <NavbarWrapper>
      <Brand to="/">Todoist</Brand>
      {
          props.isLoggedIn ? 
            <NavItems>
                <Item>
                <Link to="/dashboard">Dashboard</Link>
                </Item>
                <Item redColor>
                <Link to="/trash">Trash</Link>
                </Item>
                <Item>
                <Link to='/' onClick={props.logout}>Logout</Link>
                </Item>
            </NavItems>
            :
            <NavItems>
                <Item>
                <Link to="/login">Log in</Link>
                </Item>
            </NavItems>
      }
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

const Brand = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #fcb500;
  background: transparent;
  margin-left: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const NavItems = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.2rem;
  background: transparent;
  margin-left: auto;
`;

const Item = styled.li`
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  & > a {
    text-decoration: none;
    color: #fcb500;
    ${(props) =>
      props.redColor &&
      css`
        color: red;
      `};
  }
`;
