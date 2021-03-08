import React from "react";
import styled from "styled-components";

const CreateTaskContainer = styled.div`
  position: relative;
  left: 50%;
  width: 80vw;
  border-radius: 8px;
  padding: 0 12px;
  transform: translateX(-50%);
  background-color: #00b833;
  box-shadow: 2.5px 2.5px 3px rgba(0,0,0,0.35);
  @media screen and (min-width: 768px) {
  position: relative;
  left: 58%;
  }
  &:active {    
    transform: translate(-49.9%,1px);
    box-shadow: 0.5px 0.5px 3px rgba(0,0,0,0.35);
  }
`;

const CreateTaskText = styled.p`
  text-align: center;
  font-size: 18px;
  letter-spacing: 2px;
  padding: 10px 10px 10px 0;
  color: #FFF;  
  i {
    height: 28px;
    width: 28px;
    vertical-align: top;
    display: inline-block;
    position: relative;
    margin-right: 16px;
    background: url("/duplicate-outline.svg") center;
    background-size: cover;
  }
`;

interface Props {
  onClick: () => void
}

export default function CreateTaskButton({ onClick }: Props) {
  return (
    <CreateTaskContainer onClick={onClick}>
      <CreateTaskText>
        <i />
        新しく課題を追加
      </CreateTaskText>
    </CreateTaskContainer>
  )
}