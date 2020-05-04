import React from "react";
import styled from "styled-components";
import Brand from "./Brand";
import NavList from "./NavList";

export default () => {
  return (
    <NavbarWrapper>
      <Brand>Todoist</Brand>
      <NavList />
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;
