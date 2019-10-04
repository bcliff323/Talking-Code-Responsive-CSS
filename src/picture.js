import React from "react";
import styled from "styled-components";
import { breakpoints } from "./displayConfig";
import Small from "./images/small.png";
import Medium from "./images/medium.png";
import Large from "./images/large.png";
import XLarge from "./images/xlarge.png";

const PictureContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export default function Picture() {
  return (
    <PictureContainer>
      <picture>
        <source srcset={XLarge} media={`(min-width: ${breakpoints.large})`} />
        <source srcset={Large} media={`(min-width: ${breakpoints.medium})`} />
        <source srcset={Medium} media={`(min-width: ${breakpoints.small})`} />
        <img src={Small} />
      </picture>
    </PictureContainer>
  );
}
