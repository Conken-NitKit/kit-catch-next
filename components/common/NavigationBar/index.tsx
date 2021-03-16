import styled from "styled-components";

const NavigationContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0px;
    width: 15%;
    border-right: solid lightgray 3px;
    border-bottom: solid lightgray 3px;
  }
  height: 64px;
  display: table;
  table-layout: fixed;
  border-top: solid lightgray 3px;
  background-color: white;
  z-index: 1;
`;

const NavigationItem = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    border-bottom: solid lightgray 3px;
    margin: 0 auto;
    padding: 5px;
    :last-child {
      border-bottom: none;
    }
  }
  display: table-cell;
  vertical-align: middle;
  a {
    position: relative;
    top: 20px;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

const NavigationImage = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 28px;
  width: 28px;
  @media screen and (min-width: 768px) {
    position: static;
    margin-left: 28px;
  }
`;

const NavigationText = styled.p<{ selected: boolean }>`
  position: relative;
  text-align: center;
  color: ${({ selected }) => (selected ? "#444" : "#888")};
  font-size: 9px;
  @media screen and (min-width: 768px) {
    bottom: 50%;
    left: 50px;
    font-size: 2vw;
  }
  font-weight: ${({ selected }) => (selected ? "bolder" : "normal")};
  margin: 0;
`;

const Line = styled.div<{ height: number }>`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 15%;
    height: ${(props) => props.height}%;
    position: absolute;
    top: 40%;
    left: 0;
    border-right: solid lightgray 3px;
    border-bottom: solid lightgray 3px;
  }
`;

interface Props {
  page: string;
  height: number;
}

export const NavigationBar = ({ page, height }: Props) => {
  return (
    <>
      <NavigationContainer>
        <NavigationItem>
          <a href={"/table"}>
            <NavigationImage
              src={
                page === "時間割"
                  ? "/nav-selected-icon-table.svg"
                  : "/nav-icon-table.svg"
              }
              alt={"時間割"}
            />
            <NavigationText selected={page === "時間割"}>時間割</NavigationText>
          </a>
        </NavigationItem>

        <NavigationItem>
          <a href={"/task"}>
            <NavigationImage
              src={
                page === "課題"
                  ? "/nav-selected-icon-task.svg"
                  : "/nav-icon-task.svg"
              }
              alt={"課題"}
            />
            <NavigationText selected={page === "課題"}>課題</NavigationText>
          </a>
        </NavigationItem>

        <NavigationItem>
          <a href={"/line-key"}>
            <NavigationImage
              src={
                page === "LINE連携"
                  ? "/nav-selected-icon-password.svg"
                  : "/nav-icon-password.svg"
              }
              alt={"LINE連携"}
            />
            <NavigationText selected={page === "LINE連携"}>
              LINE連携
            </NavigationText>
          </a>
        </NavigationItem>

        <NavigationItem>
          <a href={"/settings"}>
            <NavigationImage
              src={
                page === "設定"
                  ? "/nav-selected-icon-settings.svg"
                  : "/nav-icon-settings.svg"
              }
              alt={"設定"}
            />
            <NavigationText selected={page === "設定"}>設定</NavigationText>
          </a>
        </NavigationItem>
      </NavigationContainer>
      <Line height={height}></Line>
    </>
  );
};
