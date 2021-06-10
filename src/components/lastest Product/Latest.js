import Slider from "react-slick";

import styled from "styled-components";

const LatestContainer = styled.section`
  max-width: 1200px;
  padding: 0px 40px;
  margin: 50px auto 100px auto;
`;

const LatestProductContainer = styled(Slider)`
  text-align: center;
  position: relative;
  padding-top: 70px;
  margin-top: 20px;
`;

const ProductSlides = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ProductImageContainer = styled.div`
  height: 17rem;

  & > img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
`;

const ProductDes = styled.div`
  & > h3 {
    margin: 10px 0px;
    font-weight: 500;
  }
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  color: orange;
  justify-content: center;
`;

const CustomArrowGlobalStyle = styled.span`
  border: 1px solid #ddd;
  position: absolute;
  cursor: pointer;
  top: 0;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #777;
`;
const NextArrow = styled(CustomArrowGlobalStyle)`
  right: 0px;
`;

const PrevArrow = styled(CustomArrowGlobalStyle)`
  right: 60px;
`;

export {
  LatestContainer,
  LatestProductContainer,
  ProductSlides,
  ProductImageContainer,
  ProductDes,
  ProductRating,
  NextArrow,
  PrevArrow,
};
