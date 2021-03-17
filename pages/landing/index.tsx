import styled from "styled-components";
import {
  ApproachView,
  Carousel,
  Section,
  SectionBorder,
  Usage,
} from "components/landing";

const ImgDiv = styled.div<{ src: string }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70vw;
  margin: 32px 0 64px 0;
  @media screen and (min-width: 768px) {
    width: 540px;
    height: 330px;
    left: 50%;
    transform: translateX(-50%);
  }
  background: url(${({ src }) => src}) center;
  background-size: cover;
`;

export default function Landing() {
  return (
    <>
      <ApproachView />
      <Section
        title={"Kit-Catchって何？"}
        subTitle={"概要"}
        description={
          "Kit-Catch(キット・キャッチ) は、LINEのグループで利用できる LINE bot です。" +
          "本サービスを導入することで1日の決まったタイミングに翌日の授業の時間割や期限間近の提出物のリマインドを行ってくれます。"
        }
      />
      <ImgDiv src={"/summary-min.jpg"} />
      <SectionBorder />
      <Section
        title={"Kit-Catchが活躍する場面"}
        subTitle={"使用例"}
        description={"Kit-Catchは、以下のような場面で活躍します！"}
      />
      <Carousel
        image_links={[
          "/image1.jpg",
          "/image2.jpg",
          "/image3.jpg",
          "/image4.jpg",
        ]}
      />
      <SectionBorder />
      <Section
        title={"ご利用までの手順"}
        subTitle={""}
        description={"ご利用には以下の手順が必要です。"}
      />
      <Usage left={0} />
    </>
  );
}
