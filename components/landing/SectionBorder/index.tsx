import React from "react";
import styled from "styled-components";

const SectionBorder = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 0.5px;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  margin: 32px 0;
  background: rgba(0, 0, 0, 0.2);
`;

export default function () { return (<SectionBorder />) }
