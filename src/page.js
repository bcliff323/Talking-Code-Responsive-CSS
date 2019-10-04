import React from "react";
import styled from "styled-components";
import Menu from "./menu";
import { config, breakpoints } from "./displayConfig";

const PageContainer = styled.div``;

const Main = styled.div`
  padding: 15px;

  @media (min-width: ${breakpoints.small}) {
    padding: 30px;
  }
`;

export default function Page(props) {
  return (
    <PageContainer>
      <Menu />
      <Main>{props.children}</Main>
    </PageContainer>
  );
}
