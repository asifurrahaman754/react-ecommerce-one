import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import { TestimonialData } from "../../Data/Testimonial";
import * as S from "./testimonial";

export default function Testimonial() {
  const settings = {
    pauseOnHover: false,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    <>
      <S.TestimonialContainer>
        <S.TestimonialSlider {...settings}>
          {TestimonialData.map((item, index) => (
            <div key={index}>
              <S.TestimonialSlide>
                <img src={item.image} alt="testimonial image" />
                <p>
                  <em>{item.testimonial}</em>
                </p>
                <h3>{item.name}</h3>
                <span>{item.profession}</span>
              </S.TestimonialSlide>
            </div>
          ))}
        </S.TestimonialSlider>
      </S.TestimonialContainer>
    </>
  );
}
