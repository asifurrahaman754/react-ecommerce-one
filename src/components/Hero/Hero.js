import styled from "styled-components";
import Slider from "react-slick";

const HeroSliderContainer = styled(Slider)`
  height: calc(100vh - 80px);
  max-height: 800px;
  background: #f1f1f1;
  overflow: hidden;
  align-items: center;
  display: flex;

  @media (max-width: 1080px) {
    height: auto;
  }
`;

const Slides = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 40px;

  @media (max-width: 1080px) {
    display: block;
  }
`;

const TextContainer = styled.div`
  & > h1 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #222;
  }

  @media (max-width: 1080px) {
    text-align: center;
    margin: 50px 0px 50px 0px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;

  & > img {
    width: 100%;
  }

  @media (max-width: 1080px) {
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }
`;

export { HeroSliderContainer, Slides, TextContainer, ImageContainer };
