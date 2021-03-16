import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import TaskItem from "../../components/task/Task";
import NavigationBar from "../../components/common/NavigationBar";
import TaskForm from "../../components/task/TaskForm";
import CreateTaskButton from "../../components/task/CreateTaskButton";

const TaskContainer = styled.div`
  padding: 56px 0 64px;
  width: 100vw;
`;

const Annotation = styled.p`
  color: #777;
  font-size: 11px;
  text-align: center;
  margin-top: 24px;
`;

export default function Landing() {

  const [isNew, setNew] = useState<boolean>(false)
  const [isOpen, setOpen] = useState<boolean>(false)
  const [id, setId] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [deadline, setDeadline] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [tasks, setTasks] = useState<{ id: string, name: string, subject: string, deadline: string, description: string }[] | null>(null)

  return <>
    <Header page={"課題"} />
    <TaskContainer>
      <CreateTaskButton
        onClick={() => {
          setOpen(true)
          setNew(true)
          setId('')
          setName('')
          setSubject('')
          setDeadline('')
        }}
      />
      {
        tasks &&
        tasks.map(task =>
          <TaskItem
            id={task.id}
            name={task.name}
            subject={task.subject}
            deadline={task.deadline}
            onClick={() => {
              setOpen(true)
              setNew(false)
              setId(task.id)
              setName(task.name)
              setSubject(task.subject)
              setDeadline(task.deadline)
              setDescription(task.description)
            }}
          />
        )
      }
      {
        tasks &&
        tasks.length === 0 && (
          <Annotation>現在、提出期限が控えている課題は登録されてません</Annotation>
        )
      }
    </TaskContainer>
    <NavigationBar page={"課題"} height={300} />
    <TaskForm
      isNew={isNew}
      id={id}
      setId={setId}
      name={name}
      setName={setName}
      subject={subject}
      setSubject={setSubject}
      deadline={deadline}
      setDeadline={setDeadline}
      description={description}
      setDescription={setDescription}
      isOpen={isOpen}
      setOpen={setOpen}
      tasks={tasks}
      setTasks={setTasks}
    />
  </>;
}



