import { useState } from "react";
import styled from "styled-components";
import { signIn } from "../../../utils/user/signIn";

const FormContainer = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  top: 2vw;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30vw;
  border: solid #808080 2px;
  border-radius: 3px;
  padding-top: 10vw;
  width: 80vw;
  background: url("/approach.jpg");
  background-size: cover;
  padding-bottom: 150px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7vw;
  }
`;

const ClassContainer = styled.div`
  display: table;
  table-layout: fixed;
  border-radius: 8px;
  background-color: white;
  @media screen and (min-width: 768px) {
    width: 60vw;
    margin-bottom: 20px;
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
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 1px;
  color: ${({ selected }) => (selected ? "#fff" : "black")};
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
  &:first-of-type {
    margin-top: 50px;
  }
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
  margin-bottom: 20px;
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
  const [classId, setclassId] = useState<number>(-1);
  const [course, setCourse] = useState<number>(-1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const submit = () => {
    signIn(email, password, setErrorMessage);
  };

  return (

    <FormContainer>
      <ClassContainer>
        <ClassItem selected={classId === 1} onClick={() => setclassId(1)}>
          1年
        </ClassItem>
        <ClassItem selected={classId === 2} onClick={() => setclassId(2)}>
          2年
        </ClassItem>
        <ClassItem selected={classId === 3} onClick={() => setclassId(3)}>
          3年
        </ClassItem>
        <ClassItem selected={classId === 4} onClick={() => setclassId(4)}>
          4年
        </ClassItem>
        <ClassItem selected={classId === 5} onClick={() => setclassId(5)}>
          5年
        </ClassItem>
      </ClassContainer>

      <ClassContainer>
        <ClassItem selected={course === 1} onClick={() => setCourse(1)}>
          {classId < 3 ? "1組" : "機械"}
        </ClassItem>
        <ClassItem selected={course === 2} onClick={() => setCourse(2)}>
          {classId < 3 ? "2組" : "知能"}
        </ClassItem>
        <ClassItem selected={course === 3} onClick={() => setCourse(3)}>
          {classId < 3 ? "3組" : "電気"}
        </ClassItem>
        <ClassItem selected={course === 4} onClick={() => setCourse(4)}>
          {classId < 3 ? "4組" : "情報"}
        </ClassItem>
        <ClassItem selected={course === 5} onClick={() => setCourse(5)}>
          {classId < 3 ? "5組" : "化学"}
        </ClassItem>
      </ClassContainer>

      <PasswordInput
        type={"email"}
        placeholder={"mail@apps.kct.ac.jp"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        type={"password"}
        placeholder={"パスワード"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{errorMessage}</p>
      <SubmitButton
        submittable={classId !== -1 && course !== -1 && password.length > 0}
        onClick={submit}
      >
        サインイン
      </SubmitButton>
    </FormContainer>

  );
};