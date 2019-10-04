import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  font-family: sans-serif;

  & a {
    color: magenta;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const SubTitle = styled.h2`
  color: #999;
  margin-top: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    margin-bottom: 8px;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <Title>Responsive Design</Title>
      <SubTitle>with CSS Grid</SubTitle>
      <p>Resources:</p>
      <List>
        <li>
          Luke Wroblewski:{" "}
          <a href="https://abookapart.com/products/mobile-first">
            Mobile First (Book)
          </a>
        </li>
        <li>
          Smashing Magazine:{" "}
          <a href="https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/">
            Generic CSS Mobile First
          </a>
        </li>
        <li>
          CSS Tricks:{" "}
          <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">
            Complete Guide to CSS Grid
          </a>
        </li>
        <li>
          MDN:{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture">
            Picture Element Docs
          </a>
        </li>
      </List>
    </HomeContainer>
  );
}
