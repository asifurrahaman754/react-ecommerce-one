import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import { LatestBar } from "../../Data/BarData";
import ProductBar from "../Resusable/ProductBar";
import * as S from "./Latest";
import { LatestSLiderData } from "../../Data/LatestData";
import { ProductButton } from "../Resusable/Button";

export default function Latest() {
  /* rendering user rating star */
  function renderRating(rating) {
    return Array(rating)
      .fill(" ")
      .map(() => (
        <span>
          <AiFillStar />
        </span>
      ));
  }

  /* rendering remaining outline star */
  function renderOutlineRating(rating) {
    return Array(5 - rating)
      .fill(" ")
      .map(() => (
        <span>
          <AiOutlineStar />
        </span>
      ));
  }

  //slick slider settings
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <S.LatestContainer>
      <ProductBar data={LatestBar} />

      <S.LatestProductContainer {...settings}>
        {LatestSLiderData.map(item => (
          <div key={item.id}>
            <S.ProductSlides>
              <S.ProductImageContainer>
                <img src={item.image} alt="product image" />
              </S.ProductImageContainer>

              <S.ProductDes>
                <h3>{item.name}</h3>

                <S.ProductRating>
                  {renderRating(item.rating)}
                  {renderOutlineRating(item.rating)}
                </S.ProductRating>

                <span>{item.price}</span>
                <ProductButton>add to cart</ProductButton>
              </S.ProductDes>
            </S.ProductSlides>
          </div>
        ))}
      </S.LatestProductContainer>
    </S.LatestContainer>
  );
}

//Custom slider arrow
function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.NextArrow onClick={onClick}>
      <AiOutlineArrowRight />
    </S.NextArrow>
  );
}

function CustomPrevArrow(props) {
  const { style, onClick } = props;
  return (
    <S.PrevArrow onClick={onClick}>
      <AiOutlineArrowLeft />
    </S.PrevArrow>
  );
}
