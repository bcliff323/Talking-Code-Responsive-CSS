import React from "react";
import styled from "styled-components";
import { config, breakpoints } from "./displayConfig";

const GridContainer = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.small}) {
    grid-gap: 20px;
    grid-template-rows: 100px 1fr 100px;
  }
`;

const MainContent = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.small}) {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: 80px 1fr 1fr 80px;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: 30% auto;
  }
`;

const Row = styled.div`
  overflow: hidden;
`;

const ContentItem = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: ${props => props.color || "gray"};
  margin-bottom: 20px;
  @media (min-width: ${breakpoints.small}) {
    min-height: 250px;
    margin-bottom: 0;
  }
  @media (min-width: ${breakpoints.medium}) {
    min-height: 350px;
    margin-bottom: 0;
  }
`;

export default function Grid() {
  return (
    <GridContainer>
      <Row>
        <ContentItem color="blue" />
      </Row>
      <Row>
        <MainContent>
          <ContentItem color="red" area="sidebar" />
          <ContentItem color="teal" area="content" />
          <ContentItem color="teal" area="content" />
          <ContentItem color="red" area="content" />
        </MainContent>
      </Row>
      <Row>
        <ContentItem color="purple" />
      </Row>
    </GridContainer>
  );
}
