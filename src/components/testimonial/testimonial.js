import Slider from "react-slick";

import styled from "styled-components";

const TestimonialContainer = styled.section`
  overflow: hidden;
  text-align: center;
  margin: 100px 0px 80px 0px;
`;

const TestimonialSlider = styled(Slider)``;

const TestimonialSlide = styled.div`
  max-width: 800px;
  padding: 0px 40px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;

  & > img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    margin: auto;
  }

  & > p {
    font-size: 0.9rem;
    letter-spacing: 0.2px;
    margin: 30px 0px;
  }
`;

export { TestimonialContainer, TestimonialSlider, TestimonialSlide };
