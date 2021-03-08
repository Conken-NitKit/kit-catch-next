import React from "react";
import styled from "styled-components";
import generateUuid from "../../../functions/generateUuid";

const FormContainer = styled.div<{ isOpen: boolean }>`
  bottom: ${({ isOpen }) => isOpen ? '0' : '-100vh'};
  left: 1vw;
  height: 98vh;
  width: 98vw;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 16px 16px 0 0;
  position: fixed;
  text-align: center;
  flex-wrap: wrap;
  transition: all .3s;
  background: white;
  z-index: 2;
`;

const CloseIcon = styled.i`
  position: absolute;
  top: 10px;
  left: 12px;
  height: 30px;
  width: 30px;
  background: url("/close.svg") center;
  background-size: cover;
`;

const HeaderTitle = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  margin: 12px 0 10px;
`;

const SaveButton = styled.p`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 17px;
  line-height: 30px;
  margin: 0;
  color: #1DA1F2;
  text-shadow: 0 0 3px rgba(29, 161, 242, 0.4);
`;

const HeadBar = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 0.5px;
  width: 95%;
  margin-bottom: 16px;
  background: rgba(0, 0, 0, 0.2);
`;

const InputContainer = styled.label<{ isNull: boolean, src: string }>`
  display: inline-block;
  margin: 4px 0 8px;
  padding: 12px 0;
  border-radius: 8px;
  background: #ddd;
  width: 345px;
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
  i {
    height: 24px;
    width: 24px;
    vertical-align: top;
    display: inline-block;
    position: relative;
    //background: url(${`${process.env.PUBLIC_URL}/school.svg`}) center;
    background: url(${({ src }) => src}) center;
    background-size: cover;
  }
  input {
    padding-left: 12px;
    font-size: 16px;
    line-height: 24px;
    border: none;
    outline: none;
    width: 70vw;
    background-color: rgba(0,0,0,0);
    color: ${({ isNull }) => isNull ? '#ABABAB' : '#666'};
    letter-spacing: 1px;
    &::placeholder {
      color: #ABABAB;
    }
  }
`;

const DescriptionTextArea = styled.textarea`
  border-radius: 8px;
  width: 313px;
  height:114px;
  color: #666;
  font-size: 16px;
  margin-top: 8px;
  background: #ddd;
  padding: 12px 16px;
  resize: none;
  border: none;
  outline: none;
  @media screen and (min-width :768px) {
    width: 90vw;
    height: 30vw;
  }
  &::placeholder {
    color: #ABABAB;
  }
`;

const DeleteButton = styled.div`
  position: relative;
  left: 50%;
  width: 80vw;
  border-radius: 8px;
  padding: 0 12px;
  transform: translateX(-50%);
  background-color: #f53649;
  box-shadow: 2.5px 2.5px 3px rgba(0,0,0,0.35);
  p {
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
    padding: 10px 10px 10px 0;
    color: #FFF;
    font-weight: bold;
  }
  &:active {    
    transform: translate(-49.9%,1px);
    box-shadow: 0.5px 0.5px 3px rgba(0,0,0,0.35);
  }
`;

interface Props {
  isNew: boolean
  id: string,
  setId: React.Dispatch<React.SetStateAction<string>>,
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  subject: string,
  setSubject: React.Dispatch<React.SetStateAction<string>>,
  deadline: string,
  setDeadline: React.Dispatch<React.SetStateAction<string>>,
  description: string,
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  tasks: { id: string, name: string, subject: string, deadline: string, description: string }[] | null,
  setTasks: React.Dispatch<React.SetStateAction<{ id: string, name: string, subject: string, deadline: string, description: string }[] | null>>,
}

export default function TableForm(props: Props) {
  if (props.id === '') props.setId(generateUuid())
  return (
    <FormContainer isOpen={props.isOpen}>
      <CloseIcon onClick={() => props.setOpen(false)} />
      <HeaderTitle>課題</HeaderTitle>
      <SaveButton onClick={() => {
        console.log([
          props.id,
          props.name,
          props.subject,
          props.deadline,
          props.description
        ])
        props.setTasks(() => {
          const tasks = props.tasks
          if (!tasks) return tasks
          tasks.push({
            id: props.id,
            name: props.name,
            subject: props.subject,
            deadline: props.deadline,
            description: props.description
          })
          const taskValue = tasks.reverse().filter((elm, i, self) => (
            self.findIndex(e =>
              e.id === elm.id
            ) === i
          ))
          return taskValue
        })
        props.setOpen(false)
      }}>保存</SaveButton>
      <HeadBar />

      <InputContainer
        htmlFor={'name-input'}
        isNull={false}
        src={`${process.env.PUBLIC_URL}/document-text.svg`}
      >
        <i />
        <input
          id={'name-input'}
          value={props.name}
          onChange={e => props.setName(e.target.value)}
          placeholder={'課題名'} />
      </InputContainer>

      <InputContainer
        htmlFor={'subject-input'}
        isNull={false}
        src={`${process.env.PUBLIC_URL}/school.svg`}
      >
        <i />
        <input
          id={'subject-input'}
          value={props.subject}
          onChange={e => props.setSubject(e.target.value)}
          placeholder={'科目'} />
      </InputContainer>

      <InputContainer
        htmlFor={'deadline-input'}
        isNull={props.deadline === ''}
        src={`${process.env.PUBLIC_URL}/alarm-outline.svg`}
      >
        <i />
        <input
          type={'date'}
          id={'deadline-input'}
          value={props.deadline}
          onChange={e => props.setDeadline(e.target.value)}
        />
      </InputContainer>

      <DescriptionTextArea
        value={props.description}
        onChange={e => props.setDescription(e.target.value)}
        placeholder={'自由にメモするためのスペースです！'}
      />

      {!props.isNew && <DeleteButton onClick={() => {
        if (
          window.confirm("本当に削除してもよろしいですか？") && props.tasks
        ) {
          props.setTasks(
            props.tasks.filter(task => task.id !== props.id)
          )
          props.setOpen(false)
        }
      }}>
        <p>削除ボタン</p>
      </DeleteButton>}
    </FormContainer>
  )
}