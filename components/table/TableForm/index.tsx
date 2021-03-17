import { ITimeTable } from "models/TimeTable";
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div<{ isOpen: boolean }>`
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};
  left: 1vw;
  height: 98vh;
  width: 98vw;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 16px 16px 0 0;
  position: fixed;
  text-align: center;
  flex-wrap: wrap;
  transition: all 0.3s;
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
  color: #1da1f2;
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

const InputContainer = styled.label`
  display: inline-block;
  margin: 8px 0;
  padding: 12px 0;
  border-radius: 8px;
  background: #ddd;
  width: 345px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    width: 25vw;
  }
  i {
    height: 24px;
    width: 24px;
    vertical-align: top;
    display: inline-block;
    position: relative;
    background: url("/school.svg") center;
    background-size: cover;
  }
  input {
    padding-left: 12px;
    font-size: 16px;
    line-height: 24px;
    border: none;
    outline: none;
    width: 70vw;
    background: none;
    color: #666;
    letter-spacing: 1px;
    &::placeholder {
      color: #a0a0a0;
    }
  }
`;

const DescriptionTextArea = styled.textarea`
  border-radius: 8px;
  width: 313px;
  @media screen and (min-width: 768px) {
    width: 258px;
    width: 90vw;
    height: 40vw;
  }
  height: 320px;
  color: #666;
  font-size: 16px;
  margin-top: 8px;
  background: #ddd;
  padding: 12px 16px;
  resize: none;
  border: none;
  outline: none;
  &::placeholder {
    color: #a0a0a0;
  }
`;

interface Props {
  day: string;
  time: number;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const TableForm = ({ day, time, isOpen, setIsOpen }: Props) => {
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [description, setDescription] = useState("");

  return (
    <FormContainer isOpen={isOpen}>
      <CloseIcon onClick={() => setIsOpen(false)} />
      <HeaderTitle>
        {day === "monday"
          ? "月"
          : day === "tuesday"
          ? "火"
          : day === "wednesday"
          ? "水"
          : day === "thursday"
          ? "木"
          : day === "friday"
          ? "金"
          : ""}
        曜{time + 1}限
      </HeaderTitle>
      <SaveButton>保存</SaveButton>
      <HeadBar />

      <InputContainer htmlFor={"subject-input"}>
        <i />
        <input
          id={"subject-input"}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={"科目"}
        />
      </InputContainer>

      <InputContainer htmlFor={"teacher-input"}>
        <i />
        <input
          id={"teacher-input"}
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          placeholder={"教員名"}
        />
      </InputContainer>

      <DescriptionTextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={
          "この科目の教室の場所・担当教員のメアド・評価基準などをメモするためのスペースです！"
        }
      />
    </FormContainer>
  );
};
