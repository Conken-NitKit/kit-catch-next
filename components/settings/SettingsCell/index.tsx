import React from "react";
import styled from "styled-components";

const TableCell = styled.div`
  width: 100vw;
  height: 42px;
  position: relative;
  bottom: 8px;
  border-top: solid #E4EFEF 1px;
  &:last-of-type {
    border-bottom: solid #E4EFEF 1px;
  }
  i {
    position: relative;
    left: 100vw;
    height: 14px;
    width: 14px;
    transform: translate(-40px, -30px);
    vertical-align: top;
    display: inline-block;
    background: url("/next.svg") center;
    background-size: cover;
    @media screen and (min-width: 768px){
    position: relative;
    left: 100%;
    }
  }
@media screen and (min-width: 768px){
    width: 85vw;
    position: relative;
    left: 14.7%;
    border-left: solid #E4EFEF 1px;
    border-right: solid #E4EFEF 1px;
    }
`;

const TableText = styled.p`
  line-height: 44px;
  margin: 0 0 0 16px;
  font-size: 11px;
  color: #555;
  @media screen and (min-width: 768px){
    font-size: 14.5px;
    }
`;

const ToggleSwitch = styled.div<{ isChecked: boolean }>`
  position: relative;
  left: 100vw;
  width: 45px;
  height: 24px;
  transform: translate(-56px, -34px);
  transition: .4s;
  @media screen and (min-width: 768px){
    position: relative;
    left: 100%;
    }
  label {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
    background: ${({ isChecked }) => isChecked ? '#4BD865' : '#ccc'};
    transition: .4s;
    box-sizing: border-box;
    border-radius: 16px;
    &:after {
      content: '';
      position: absolute;
      top: 1.45px;
      left: ${({ isChecked }) => isChecked ? '21px' : '2px'};
      width: 21px;
      height: 21px;
      border-radius: 100%;
      z-index: 2;
      background: white;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
      transition: .4s;
    }
  }
`;

interface Props {
  text: string,
  hasSwitch: boolean,
  isChecked: boolean,
  setChecked: () => void
  onClick: () => void
}

export default function SettingsCell({ text, hasSwitch, isChecked, setChecked, onClick }: Props) {
  return (
    <TableCell onClick={onClick}>
      <TableText>
        {text}
      </TableText>
      { hasSwitch
        ? <ToggleSwitch
          isChecked={isChecked}
          onClick={setChecked}
        >
          <label />
        </ToggleSwitch>
        : <i />
      }
    </TableCell>
  )
}