import styled from "styled-components";
import { generateUuid } from "utils/generateUuid";

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

const InputContainer = styled.label<{ isNull: boolean; src: string }>`
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
    background-color: rgba(0, 0, 0, 0);
    color: ${({ isNull }) => (isNull ? "#ABABAB" : "#666")};
    letter-spacing: 1px;
    &::placeholder {
      color: #ababab;
    }
  }
`;

const DescriptionTextArea = styled.textarea`
  border-radius: 8px;
  width: 313px;
  height: 114px;
  color: #666;
  font-size: 16px;
  margin-top: 8px;
  background: #ddd;
  padding: 12px 16px;
  resize: none;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 90vw;
    height: 30vw;
  }
  &::placeholder {
    color: #ababab;
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
  box-shadow: 2.5px 2.5px 3px rgba(0, 0, 0, 0.35);
  p {
    text-align: center;
    font-size: 16px;
    letter-spacing: 2px;
    padding: 10px 10px 10px 0;
    color: #fff;
    font-weight: bold;
  }
  &:active {
    transform: translate(-49.9%, 1px);
    box-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.35);
  }
`;

interface Props {
  isNew: boolean;
  id: string;
  setId: (arg: string) => void;
  name: string;
  setName: (arg: string) => void;
  subject: string;
  setSubject: (arg: string) => void;
  deadline: string;
  setDeadline: (arg: string) => void;
  description: string;
  setDescription: (arg: string) => void;
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  tasks:
    | {
        id: string;
        name: string;
        subject: string;
        deadline: string;
        description: string;
      }[]
    | null;
  setTasks: React.Dispatch<
    React.SetStateAction<
      | {
          id: string;
          name: string;
          subject: string;
          deadline: string;
          description: string;
        }[]
      | null
    >
  >;
}

export const TaskForm = ({
  isNew,
  id,
  setId,
  name,
  setName,
  subject,
  setSubject,
  deadline,
  setDeadline,
  description,
  setDescription,
  isOpen,
  setOpen,
  tasks,
  setTasks,
}: Props) => {
  if (id === "") setId(generateUuid());
  return (
    <FormContainer isOpen={isOpen}>
      <CloseIcon onClick={() => setOpen(false)} />
      <HeaderTitle>課題</HeaderTitle>
      <SaveButton
        onClick={() => {
          console.log([id, name, subject, deadline, description]);
          setTasks(() => {
            if (!tasks) return tasks;
            tasks.push({
              id: id,
              name: name,
              subject: subject,
              deadline: deadline,
              description: description,
            });
            const taskValue = tasks
              .reverse()
              .filter(
                (elm, i, self) => self.findIndex((e) => e.id === elm.id) === i
              );
            return taskValue;
          });
          setOpen(false);
        }}
      >
        保存
      </SaveButton>
      <HeadBar />

      <InputContainer
        htmlFor={"name-input"}
        isNull={false}
        src={"/document-text.svg"}
      >
        <i />
        <input
          id={"name-input"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"課題名"}
        />
      </InputContainer>

      <InputContainer
        htmlFor={"subject-input"}
        isNull={false}
        src={"/school.svg"}
      >
        <i />
        <input
          id={"subject-input"}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={"科目"}
        />
      </InputContainer>

      <InputContainer
        htmlFor={"deadline-input"}
        isNull={deadline === ""}
        src={"/alarm-outline.svg"}
      >
        <i />
        <input
          type={"date"}
          id={"deadline-input"}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </InputContainer>

      <DescriptionTextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={"自由にメモするためのスペースです！"}
      />

      {!isNew && (
        <DeleteButton
          onClick={() => {
            if (window.confirm("本当に削除してもよろしいですか？") && tasks) {
              setTasks(tasks.filter((task) => task.id !== id));
              setOpen(false);
            }
          }}
        >
          <p>削除ボタン</p>
        </DeleteButton>
      )}
    </FormContainer>
  );
};
