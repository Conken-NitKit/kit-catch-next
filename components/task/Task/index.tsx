import React from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  position: relative;
  left: 50%;
  @media screen and (min-width: 768px) {
  position: relative;
  left: 58%;
  }
  width: 80vw;
  border-radius: 8px;
  padding: 16px 12px;
  margin: 16px 0;
  transform: translateX(-50%);
  box-shadow: 1px 1px 4px rgba(0,0,0,0.35);
  border: solid 0.1px rgba(0,0,0,0.15);
  &:active {
    transform: translate(-49.9%, 1px);
    box-shadow: 0.5px 0.5px 5px rgba(0,0,0,0.35);
  }
  i {
    float: right;
    height: 24px;
    width: 24px;
    margin-right: 8px;
    vertical-align: top;
    display: inline-block;
    position: relative;
    background: url("/ellipsis-horizontal.svg") center;
    background-size: cover;
  }
`

const TaskText = styled.p`
  font-size: 17px;
  padding-bottom: 5px;
  margin: 0;
  color: #337ab7;
  font-weight: bolder;
`

const TaskDescription = styled.p`
  font-size: 12.5px;
  padding: 3px 0 0;
  margin: 0;
  color: #707070;
`

interface Props {
  id: string
  name: string,
  subject: string,
  deadline: string,
  onClick: () => void
}

export default function TaskItem({ id, name, subject, deadline, onClick }: Props) {
  return (
    <TaskContainer onClick={onClick}>
      <i />
      <TaskText> {name} </TaskText>
      <TaskDescription> {subject} </TaskDescription>
      <TaskDescription> 提出期限: {
        (() => {
          const date = new Date(deadline)
          return (
            date.getFullYear()
            + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
            + '/' + ('0' + date.getDate()).slice(-2)
          )
        })()
      } </TaskDescription>
    </TaskContainer>
  )
}
