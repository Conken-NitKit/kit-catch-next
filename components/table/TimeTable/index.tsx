import { ITimeTable } from "models/TimeTable";
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
    color: #fff;
  }
  tbody tr {
    @media all and (min-width: 768px) {
      height: 17vh;
      font-size: 1.5em;
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
    box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    &:active {
      transform: translate(1px, 1.5px);
      box-shadow: 0.3px 0.3px 1.5px rgba(0, 0, 0, 0.4);
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
  tableValue: ITimeTable;
}

export const TimeTable = ({ tableValue }: Props) => {
  return (
    <>
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
            Object.entries(tableValue).map((column) => (
              <th key={column[0]}>
                {console.log(column)}
                {Array.isArray(column[1]) &&
                  column[1].map(
                    (subjectName, j) =>
                      typeof subjectName === "string" && (
                        <tr key={column[0] + j.toString()} onClick={() => {}}>
                          {subjectName}
                        </tr>
                      )
                  )}
              </th>
            ))}
        </tbody>
      </Table>
      <Annotation>
        ↑ 表のセルをクリックすることで時間割を修正可能です
      </Annotation>
    </>
  );
};
