import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 44px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ClassContainer = styled.div`
  display: table;
  table-layout: fixed;
  border-radius: 8px;
  background-color: white;
  @media screen and (min-width: 768px) {
    width: 700px;
    margin-bottom: 7px;
  }
`;

const ClassItem = styled.div<{ selected: boolean }>`
  display: table-cell;
  vertical-align: middle;
  border: 0.5px solid #abb2b7;
  border-right: none;
  text-align: center;
  width: 36px;
  padding: 5px 8px;
  font-size: 10px;
  line-height: 22px;
  letter-spacing: 1px;
  color: ${({ selected }) => (selected ? "#fff" : "#555e64")};
  background: ${({ selected }) => (selected ? "#4daaff" : "#fff")};
  transition: all 0.7s;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    border-radius: 0 4px 4px 0;
    border-right: solid #abb2b7 0.5px;
  }
`;

const PasswordInput = styled.input`
  width: 236px;
  font-size: 14px;
  line-height: 24px;
  color: #555e64;
  -webkit-rtl-ordering: logical;
  cursor: text;
  padding: 6px 12px;
  outline: none;
  letter-spacing: 2px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  border-radius: 4px;
  margin-bottom: 8px;
  &::placeholder {
    color: #abb2b7;
    letter-spacing: 1px;
  }
`;

const SubmitButton = styled.button<{ submittable: boolean }>`
  width: 270px;
  color: white;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 10px 0;
  border-radius: 3px;
  background: rgba(
    0,
    149,
    246,
    ${({ submittable }) => (submittable ? 1 : 0.3)}
  );
  transform: translate(
    ${({ submittable }) => (submittable ? "-1px, -1px" : "0, 0")}
  );
  &:active {
    transform: translate(0px, 0px);
  }
  transition: all 0.4s;
`;

export const ClassRadio = () => {
  const [grade, setGrade] = useState<number>(-1);
  const [course, setCourse] = useState<number>(-1);
  const [password, setPassword] = useState<string>("");
  return (
    <FormContainer>
      <ClassContainer>
        <ClassItem selected={grade === 1} onClick={() => setGrade(1)}>
          1年
        </ClassItem>
        <ClassItem selected={grade === 2} onClick={() => setGrade(2)}>
          2年
        </ClassItem>
        <ClassItem selected={grade === 3} onClick={() => setGrade(3)}>
          3年
        </ClassItem>
        <ClassItem selected={grade === 4} onClick={() => setGrade(4)}>
          4年
        </ClassItem>
        <ClassItem selected={grade === 5} onClick={() => setGrade(5)}>
          5年
        </ClassItem>
      </ClassContainer>

      <ClassContainer>
        <ClassItem selected={course === 1} onClick={() => setCourse(1)}>
          {grade < 3 ? "1組" : "機械"}
        </ClassItem>
        <ClassItem selected={course === 2} onClick={() => setCourse(2)}>
          {grade < 3 ? "2組" : "知能"}
        </ClassItem>
        <ClassItem selected={course === 3} onClick={() => setCourse(3)}>
          {grade < 3 ? "3組" : "電気"}
        </ClassItem>
        <ClassItem selected={course === 4} onClick={() => setCourse(4)}>
          {grade < 3 ? "4組" : "情報"}
        </ClassItem>
        <ClassItem selected={course === 5} onClick={() => setCourse(5)}>
          {grade < 3 ? "5組" : "化学"}
        </ClassItem>
      </ClassContainer>

      <PasswordInput
        type={"password"}
        placeholder={"パスワード"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton
        submittable={grade !== -1 && course !== -1 && password.length > 0}
        onClick={() => {
          if (grade !== -1 && course !== -1 && password.length > 0)
            window.location.href = `/table`;
        }}
      >
        サインイン
      </SubmitButton>
    </FormContainer>
  );
};
