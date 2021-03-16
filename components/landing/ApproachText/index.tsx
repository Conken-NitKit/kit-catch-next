import styled from "styled-components";
import { ClassRadio } from "../ClassRadio";

const ApproachTitle = styled.h1`
  width: 100%;
  font-size: 1.8rem;
  padding: 4px 0 0;
  text-shadow: 0 0 10px lightgray;
  text-align: center;
`;

const ApproachDescription = styled.p`
  width: 100%;
  font-size: 1.03rem;
  color: rgba(0, 0, 0, 0.85);
  font-weight: bolder;
  text-align: center;
  text-shadow: 0 0 5px lightgray;
  -webkit-text-stroke: 0.25px white;
`;

export const ApproachText = () => {
  return (
    <>
      <ApproachTitle>Kit-Catch</ApproachTitle>
      <ApproachDescription>
        Kit-Catch(キット・キャッチ) は<br />
        北九州高専の学生専用の
        <br />
        「時間割＆課題」管理サービスです！
      </ApproachDescription>
      <ClassRadio />
    </>
  );
}
