import { useState } from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaCreditCard, FaCartPlus } from "react-icons/fa";

import * as S from "./ProductDetails";
import image1 from "../../assets/images/products/iPhone/iphone1.jpeg";
import image2 from "../../assets/images/products/iPhone/iphone2.jpeg";
import image3 from "../../assets/images/products/iPhone/iphone3.jpeg";
import image4 from "../../assets/images/products/iPhone/iphone4.jpeg";
import image5 from "../../assets/images/products/iPhone/iphone5.jpeg";

export default function ProductDetails() {
  const [quantity, setquantity] = useState(0);
  const [activeImage, setAcitveImage] = useState(image1);

  return (
    <S.ProductDetailsContainer>
      <S.ProductDContentWrapper>
        {/* first image column */}
        <S.ProductVisitonWrapper>
          <S.ProductImageWrapper>
            <S.ProductImageShowCase>
              <img
                onMouseOver={e => setAcitveImage(e.target.src)}
                src={image1}
                alt="product image"
              />
              <img
                onMouseOver={e => setAcitveImage(e.target.src)}
                src={image2}
                alt="product image"
              />
              <img
                onMouseOver={e => setAcitveImage(e.target.src)}
                src={image3}
                alt="product image"
              />
              <img
                onMouseOver={e => setAcitveImage(e.target.src)}
                src={image4}
                alt="product image"
              />
              <img
                onMouseOver={e => setAcitveImage(e.target.src)}
                src={image5}
                alt="product image"
              />
            </S.ProductImageShowCase>
            <S.ProductImageBig>
              <img src={activeImage} alt="product image" />
            </S.ProductImageBig>
          </S.ProductImageWrapper>

          <S.ProductButtons>
            <button>
              <span>
                <FaCreditCard />
              </span>
              add to cart
            </button>
            <button>
              <span>
                <FaCartPlus />
              </span>
              buy now
            </button>
          </S.ProductButtons>
        </S.ProductVisitonWrapper>

        {/* second text column */}
        <S.ProductDetailsText>
          <h1>Apple iPhone XR</h1>
          <span>$250.99</span>

          <S.ProductRating>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </S.ProductRating>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a
            doloribus iste natus et facere? dolor sit amet consectetur
            adipisicing elit. Sunt a doloribus iste natus et facere?
          </p>

          <S.ProductSelect>
            <S.ProductType>
              <span>Color :</span>
              <select name="color">
                <option value="blue">blue</option>
                <option value="red">red</option>
              </select>
            </S.ProductType>
            <S.ProductType>
              <span>Inches :</span>
              <select name="inches">
                <option value="6.63">6.63</option>
                <option value="7">7</option>
              </select>
            </S.ProductType>
          </S.ProductSelect>

          <S.ProductQuantity>
            <span>Quantity :</span>
            <S.QuantityButtons>
              <FiMinus onClick={() => quantity && setquantity(q => q - 1)} />
              <span>{quantity}</span>
              <FiPlus onClick={() => setquantity(q => q + 1)} />
            </S.QuantityButtons>
          </S.ProductQuantity>
        </S.ProductDetailsText>
      </S.ProductDContentWrapper>
    </S.ProductDetailsContainer>
  );
}
