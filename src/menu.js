import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { config, breakpoints } from "./displayConfig";
import NavOpen from "./images/nav-icon.png";
import NavClose from "./images/nav-close.png";

const MenuContainer = styled.div`
  background: magenta;
  position: sticky;
  height: ${config.menuHeight};
`;

const MenuList = styled.ul`
  display: ${props => (props.open ? "block" : "none")}
  position: ${props => (props.open ? "fixed" : "relative")}
  height: ${props => (props.open ? "100vh" : "100%")}
  top: ${props => (props.open ? config.menuHeight : "0")}
  width: 100%;
  background: magenta;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${breakpoints.small}) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    top: 0;
  }

  @media (min-width: ${breakpoints.medium}) {
    justify-content: end;
  }
`;

const MenuItem = styled.li`
  border-left: ${props => (props.open ? "none" : "1px solid white")};

  &:first-child {
    border: none;
  }

  @media (min-width: ${breakpoints.small}) {
    border-left: 1px solid white;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 2em;
  margin: 5px 15px;
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  max-width: 40px;
  cursor: pointer;
  margin: 20px 0 0 20px;

  & img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.small}) {
    display: none;
  }
`;

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContainer>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <img alt="" src={menuOpen ? NavClose : NavOpen} />
      </MenuButton>
      <MenuList open={menuOpen}>
        <MenuItem open={menuOpen}>
          <MenuLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem open={menuOpen}>
          <MenuLink to="/grid" onClick={() => setMenuOpen(false)}>
            Grid
          </MenuLink>
        </MenuItem>
        <MenuItem open={menuOpen}>
          <MenuLink to="/picture" onClick={() => setMenuOpen(false)}>
            Picture
          </MenuLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}
