import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  display: table;
  table-layout: fixed;
  border-bottom: solid lightgray 0.5px;
  background-color: white;
  z-index: 1;
`;

const HeaderText = styled.p`
  text-align: center;
  font-size: 19px;
  font-weight: bolder;
  letter-spacing: 3px;
  margin: 12px;
  color: #666;
  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 2.5vw;
    letter-spacing: 7px;
    position: relative;
    left: 8%;
  }
`;

interface Props {
  page: string
}

export default function NavigationBar({ page }: Props) {
  return (
    <HeaderContainer onClick={() => { window.scroll({ top: 0, behavior: 'smooth' }) }}>
      <HeaderText>
        {page}
      </HeaderText>
    </HeaderContainer>
  )
}
