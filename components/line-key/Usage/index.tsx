import styled from "styled-components";
import { LineButton } from "../LineButton";

const NormalText = styled.p`
  position: relative;
  width: 100%;
  color: rgba(0, 0, 0, 0.85);
  font-size: 12px;
  font-weight: bold;
  font-family: "M PLUS 1p", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  text-align: center;
`;

const Container = styled.div<{ left: number }>`
  position: relative;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 700px;
    left: ${(props) => props.left}%;
  }
  top: 0;
  margin: 15px auto;
  border: solid 2px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
`;

const UsageContainer = styled(Container)`
  margin-top: 10px;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    width: 80vw;
  }
`;

const UsageImage = styled.img`
  position: relative;
  max-width: 80%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  margin-top: 48px;
`;

const StepText = styled.span`
  position: relative;
  left: -4px;

  margin-right: 2px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;

const StepNum = styled.span`
  position: relative;

  font-size: 28px;
  font-weight: normal;
  text-align: center;
  margin-right: 2px;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 0;
`;

interface Props {
  left: number;
}

export const Usage = ({ left }: Props) => {
  return (
    <>
      <UsageContainer left={left}>
        <div>
          <UsageImage src={"/usage1-min.jpg"} alt={""} />
          <NormalText>
            <StepText>
              step<StepNum>1</StepNum>
            </StepText>
            LINE Bot を友達に登録！
          </NormalText>
          <LineContainer>
            <LineButton />
          </LineContainer>
        </div>
        <div>
          <UsageImage src={"/usage2-min.jpg"} alt={""} />
          <NormalText>
            <StepText>
              step<StepNum>2</StepNum>
            </StepText>
            追加した LINE Bot を<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; グループに招待！
          </NormalText>
        </div>
        <div>
          <UsageImage src={"/usage3-min.jpg"} alt={""} />
          <NormalText>
            <StepText>
              step<StepNum>3</StepNum>
            </StepText>
            自分のクラスのパスワードで <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Webサイトにログイン！
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LINE連携からパスワードを取得！
          </NormalText>
        </div>
        <div>
          <UsageImage src={"/usage4-min.jpg"} alt={""} />
          <NormalText>
            <StepText>
              step<StepNum>4</StepNum>
            </StepText>
            取得したワンタイムパスワードを
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            LINEのグループして紐付け完了
            <br />
          </NormalText>
        </div>
      </UsageContainer>
    </>
  );
};
