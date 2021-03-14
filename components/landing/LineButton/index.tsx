import React from "react";
import styled from "styled-components";

const LineButton = styled.button`
    position: relative;
    padding: 4px 16px;
    background-color: #00b833;
    color: #fff;
    font-size: 13px;
    line-height: 24px;
    border: none;
    border-radius: 9px;
    outline: none;
    transition: 0.2s;
    cursor: pointer;
    &:active {
      transform: translate(1px, 1px);
    }
    i {
      height: 24px;
      width: 24px;
      vertical-align: top;
      display: inline-block;
      position: relative;
      background: url(${`${process.env.PUBLIC_URL}/line.png`}) center;
      background-size: cover;
    }
`;

export default function Line() {
  return (
    <a href={"/"}>
      <LineButton>
        <i />
        <span>友達登録はこちら</span>
      </LineButton>
    </a>
  )
}

