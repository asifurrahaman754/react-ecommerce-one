import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import * as S from "./Hero";
import { SliderData } from "../../Data/HeroSliderData";
import { Button } from "../Resusable/Button";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };

  return (
    <S.HeroSliderContainer {...settings}>
      {SliderData.map(item => (
        <div key={item.id}>
          <S.Slides>
            <S.TextContainer>
              <span>{item.moto}</span>
              <h1>{item.heading}</h1>
              <p>{item.subHeading}</p>
              <Button to="/product">{item.buttonText}</Button>
            </S.TextContainer>

            <S.ImageContainer>
              <img src={item.image} alt="slider image" />
            </S.ImageContainer>
          </S.Slides>
        </div>
      ))}
    </S.HeroSliderContainer>
  );
}
