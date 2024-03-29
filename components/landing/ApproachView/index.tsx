import styled from "styled-components";
import { ApproachText } from "../ApproachText";

const ApproachViewDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 680px;
  background: url("/approach.jpg");
  background-size: cover;
`;

const ApproachButton = styled.div`
color: lightblue;
font-size: 25px;
position: absolute;
right: 2vw;
top: 0.5vw;
&:hover {
  cursor: pointer;
}
`;

const ApproachIcon = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background: url("/logo192.jpg");
  background-size: cover;
`;

const ApproachContainer = styled.div`
  padding: 80px 0;
  margin-bottom: 16px;
`;

export const ApproachView = () => {
  return (
    <ApproachViewDiv>
      <ApproachButton onClick={() => { window.location.href = "/signin"; }}>サインイン</ApproachButton>
      <ApproachContainer>
        <ApproachIcon />
        <ApproachText />
      </ApproachContainer>
    </ApproachViewDiv>
  );
}
