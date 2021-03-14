import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 76vw;
  margin: 32px 0 64px 0;
  @media screen and (min-width: 768px) {
    width: 540px;
    height: 330px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const CarouselDiv = styled.div<{ src: string }>`
  height: 76vw;
  @media screen and (min-width: 768px) {
    height: 330px;
  }
  background: url(${({ src }) => src}) center;
  background-size: cover;
`;

interface Props {
  image_links: string[];
}

export const Carousel = ({ image_links }: Props) => {
  return (
    <Wrapper>
      <Slider
        dots={true}
        infinite={true}
        autoplay={true}
        arrows={false}
        touchMove={true}
        autoplaySpeed={2500}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {image_links.map((image_link) => (
          <CarouselDiv src={image_link} />
        ))}
      </Slider>
    </Wrapper>
  );
}
