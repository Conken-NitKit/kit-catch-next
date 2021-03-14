import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  margin: 72px auto 0;
  padding: 0;
  width: 98vw;
  table-layout: fixed;
  @media screen and (min-width: 768px) {
    width: 84%;
    position: absolute;
    right: 5px;
  }
  tr {
    background-color: #fff;
  }
  thead th {
    padding: 3px 0;
    background-color: #50535d;
    font-size: 0.9em;
    font-weight: bolder;
    color:#fff;
  }
  tbody tr {
    @media all and (min-width: 768px){
      height: 17vh;
      font-size: 1.50em;
      line-height: 50px;
    }
    line-height: 20px;
    font-size: 0.6em;
    height: 10vh;
    background-color: #efefef;
    display: flex;
    margin: 4px 1px;
    padding: 0 8px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    box-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.2);
    transition: all 0.3s;
    &:active {
      transform: translate(1px, 1.5px);
      box-shadow: 0.3px 0.3px 1.5px rgba(0,0,0,0.4);
      background-color: #ddd;
    }
  }
`;

const Annotation = styled.p`
  color: #555;
  font-size: 11px;
  text-align: center;
  @media all and (min-width: 768px) {
    font-size: 20px;
  }
`;

interface Props {
  tableValue: {
    [key: string]: { subject: string, description: string, teacher: string }[],
    monday: { subject: string, description: string, teacher: string }[],
    tuesday: { subject: string, description: string, teacher: string }[],
    wednesday: { subject: string, description: string, teacher: string }[],
    thursday: { subject: string, description: string, teacher: string }[],
    friday: { subject: string, description: string, teacher: string }[],
  } | null,
  setDay: (arg: string) => void,
  setTime: (arg: number) => void,
  setSubject: (arg: string) => void,
  setDescription: (arg: string) => void,
  setTeacher: (arg: string) => void,
  setOpen: (arg: boolean) => void
}

export default function TimeTable({ tableValue, setDay, setTime, setSubject, setDescription, setTeacher, setOpen }: Props) {
  return (<>
    <Table>
      <thead>
        <tr>
          <th>月</th>
          <th>火</th>
          <th>水</th>
          <th>木</th>
          <th>金</th>
        </tr>
      </thead>
      <tbody>
        {tableValue &&
          ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map(key => <th key={key}>
            {
              tableValue &&
              tableValue[key].map((cell, j) => (
                <tr
                  key={key + j.toString()}
                  onClick={() => {
                    setOpen(true)
                    setDay(key)
                    setTime(j)
                    setSubject(cell.subject)
                    setDescription(cell.description)
                    setTeacher(cell.teacher)
                  }}
                >
                  {cell.subject}<br></br>
                  {cell.teacher}
                </tr>
              ))
            }
          </th>)
        }
      </tbody>
    </Table>
    <Annotation>↑ 表のセルをクリックすることで時間割を修正可能です</Annotation>
  </>
  )
}
